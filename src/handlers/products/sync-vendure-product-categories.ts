import {PayloadHandler} from "payload";
import {CollectionsQuery} from "@/graphql/collections";
import {uploadVendureMedia} from "@/utilities/upload-vendure-media";

export const syncVendureProductCategories:PayloadHandler = async (req) => {
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
			query:CollectionsQuery
		})
	});

	if (!collectionRes.ok) {
		return Response.json({
			success: false,
			message: 'Failed to sync with Vendure',
		}, { status: 500 });
	}

	const collectionData = await collectionRes.json();
	const collections = collectionData.data.collections.items;

	console.log(`Found ${collections.length} product categories.`);

	const categoryIdMap:Record<any, any> = {};
	const missingCategories = [];

	for(const child of collections) {
		try {
			const foundCat = await payload.find({
				collection: 'product-categories',
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

			categoryIdMap[child.id] = existingCat;

			let existingImageId = null;
			let defaultImageId = null;
			if (existingCat.defaultImage) {
				defaultImageId = typeof existingCat.defaultImage !== 'number' ? (<any>existingCat.defaultImage).id : existingCat.defaultImage;
				existingImageId = defaultImageId;
			}

			if (typeof existingCat.defaultImage !== 'number' && child.featuredAsset && (!existingCat.defaultImage || (<any>existingCat.defaultImage).vendure_id !== child.featuredAsset.id)) {
				defaultImageId = await uploadVendureMedia(payload, child.name, child.slug, child.featuredAsset);
			}

			if (defaultImageId !== existingImageId || existingCat.title !== child.name) {
				console.log(`Updating category ${child.name}`);
				await payload.update({
					collection: 'product-categories',
					id: existingCat.id,
					data: {
						title: child.name,
						defaultImage: defaultImageId,
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
					collection: 'product-categories',
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

		const defaultImageId = child.featuredAsset ? await uploadVendureMedia(payload, child.name, child.slug, child.featuredAsset) : null;

		let slug = child.slug;
		let loop = 1;
		while(true) {
			const existingCatWithSameSlug = await payload.find({
				collection: 'product-categories',
				where: {
					slug: {equals: child.slug},
				},
				locale: 'en',
			});

			if (existingCatWithSameSlug.docs.length) {
				slug = `${child.slug}-${existingCatWithSameSlug.docs.length + loop}`;
				loop++;
			} else {
				break;
			}
		}

		console.log(`Slug is ${slug}`);

		const newCategory = await payload.create({
			collection: 'product-categories',
			data: {
				title: child.name,
				slug: slug,
				vendureSlug: child.slug,
				defaultImage: defaultImageId,
			} as any,
			locale: 'en',
		});

		categoryIdMap[child.id] = newCategory;

		for(const translation of child.translations) {
			if (translation.languageCode === 'en') {
				continue;
			}

			await payload.update({
				collection: 'product-categories',
				id: newCategory.id,
				data: {
					title: translation.name,
					slug: translation.slug,
					defaultImage: defaultImageId,
				},
				locale: translation.languageCode,
			});
		}

		await payload.update({
			collection: 'product-categories',
			id: newCategory.id,
			data: {
				_status: 'published',
			},
			locale: 'en',
		});
	}

	for(const child of collections) {
		if (child.parentId) {
			const cat = categoryIdMap[child.id];
			if (!cat) {
				console.error(`Could not find category for ${child.name}`);
				continue;
			}

			const parentCat = categoryIdMap[child.parentId];
			if (!parentCat) {
				console.error(`Could not find parent category for ${child.name}`);
				continue;
			}

			await payload.update({
				collection: 'product-categories',
				id: cat.id,
				data: {
					parentCategory: parentCat.id,
				},
				locale: 'en',
			});
		}
	}

		console.log('Done syncing.');
	return Response.json({
		success: true,
	}, { status: 200 });
}