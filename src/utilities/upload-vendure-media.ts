import {Payload} from "payload";
import path from "node:path";

export async function uploadVendureMedia(payload: Payload, name: string, slug: string, featuredAsset: any) {
	const existingMedia = await payload.find({
		collection: 'media',
		where: {
			vendure_id: {
				equals: featuredAsset.id,
			},
		}
	});

	if (existingMedia.docs.length) {
		return existingMedia.docs[0].id;
	}

	const ext = path.extname(featuredAsset.source);
	const filename = slug+'-'+featuredAsset.id+ext;

	const existingMediaMatchingName = await payload.find({
		collection: 'media',
		where: {
			filename: {
				equals: filename,
			},
		}
	});

	if (existingMediaMatchingName.docs.length) {
		return existingMediaMatchingName.docs[0].id;
	}

	const downloadRes = await fetch(featuredAsset.source);
	if (!downloadRes.ok) {
		return null;
	}

	console.log("Uploading new image.");

	const blob = await downloadRes.blob();

	const blobBuffer = await blob.arrayBuffer();
	const file = {
		data: Buffer.from(blobBuffer),
		mimetype: featuredAsset.mimeType,
		name: filename,
		size: featuredAsset.fileSize,
	}

	const newUploads = await payload.create({
		collection: 'media',
		data: {
			alt: name,
			filename,
			mimeType: featuredAsset.mimeType,
			width: featuredAsset.width,
			height: featuredAsset.height,
			focalX: featuredAsset.focalPoint?.x ?? 50,
			focalY: featuredAsset.focalPoint?.y ?? 50,
			vendure_id: featuredAsset.id,
		} as any,
		file,
	});

	return newUploads.id;
}