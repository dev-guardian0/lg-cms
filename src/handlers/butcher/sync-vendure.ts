import {CollectionBySlugQuery} from "@/graphql/collection-by-slug";
import {PayloadHandler} from "payload";
import {uploadVendureMedia} from "@/utilities/upload-vendure-media";

export const syncVendure:PayloadHandler = async (req) => {
	if (!process.env.VENDURE_API_URL) {
		console.error('No Vendure API URL provided.');
		return Response.json({
			success: false,
			message: 'No Vendure API URL provided.',
		}, { status: 500 });
	}

	console.log('syncing vendure');

	const { user, payload } = req;

	if (!user) {
		return Response.json({
			success: false,
			message: 'Unauthorized',
		}, { status: 401 });
	}

	const collectionRes = await fetch(process.env.VENDURE_API_URL+'?languageCode=en', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query:CollectionBySlugQuery,
			variables: {
				slug: 'butcher-shop',
			},
		})
	});

	if (!collectionRes.ok) {
		return Response.json({
			success: false,
			message: 'Failed to sync with Vendure',
		}, { status: 500 });
	}

	const collectionData = await collectionRes.json();
	const collection = collectionData.data.collection;

	console.log(`Found ${collection.children.length} categories.`);

	const missingCategories = [];

	for(const child of collection.children) {
		try {
			const foundCat = await payload.find({
				collection: 'butcher-categories',
				where: {
					vendureSlug: {equals: child.slug},
				},
				locale: 'en',
			});

			if (!foundCat.docs.length) {
				missingCategories.push(child);
				continue;
			}

			const existingCat = foundCat.docs[0];
			let defaultImageId = (<any>existingCat.defaultImage).id ?? null;

			if (typeof existingCat.defaultImage !== 'number' && child.featuredAsset && (!existingCat.defaultImage || (<any>existingCat.defaultImage).vendure_id !== child.featuredAsset.id)) {
				defaultImageId = await uploadVendureMedia(payload, child.name, child.slug, child.featuredAsset);
			}

			if (defaultImageId !== (<any>existingCat.defaultImage).id || existingCat.title !== child.name) {
				console.log(`Updating category ${child.name}`);
				await payload.update({
					collection: 'butcher-categories',
					id: existingCat.id,
					data: {
						title: child.name,
						defaultImageId: defaultImageId,
						vendureSlug: child.slug,
					} as any,
					locale: 'en',
				});
			}

			for(const translation of child.translations) {
				if (translation.languageCode === 'en') {
					continue;
				}

				await payload.update({
					collection: 'butcher-categories',
					id: existingCat.id,
					data: {
						title: translation.name,
						slug: translation.slug,
						defaultImage: defaultImageId,
					},
					locale: translation.languageCode,
				});
			}
		} catch (e) {
			console.error(e);
		}
	}

	for(const child of missingCategories) {
		console.log(`Processing missing category ${child.name}`);

		const defaultImageId = await uploadVendureMedia(payload, child.name, child.slug, child.featuredAsset);
		if (!defaultImageId) {
			console.error('missing default image');
			throw new Error('Missing default image');
		}

		console.log(child.featuredAsset);

		const newCategory = await payload.create({
			collection: 'butcher-categories',
			data: {
				title: child.name,
				slug: child.slug,
				vendureSlug: child.slug,
				defaultImage: defaultImageId,
			},
			locale: 'en',
		});

		for(const translation of child.translations) {
			if (translation.languageCode === 'en') {
				continue;
			}

			await payload.update({
				collection: 'butcher-categories',
				id: newCategory.id,
				data: {
					title: translation.name,
					slug: translation.slug,
					defaultImage: defaultImageId ?? undefined,
				},
				locale: translation.languageCode,
			});
		}

		await payload.update({
			collection: 'butcher-categories',
			id: newCategory.id,
			data: {
				_status: 'published',
			},
			locale: 'en',
		});
	}

	console.log('Done syncing.');
	return Response.json({
		success: true,
	}, { status: 200 });
}