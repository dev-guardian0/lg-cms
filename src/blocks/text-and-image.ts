import {Block} from "payload";

export const TextAndImage: Block = {
	slug: 'text-and-image',
	imageURL: '/img/blocks/text-and-image.png',
	dbName: 'text_and_image',
	labels: {
		singular: 'Text and Image',
		plural: 'Text and Images',
	},
	fields: [
		{
			name: "title",
			type: "textarea",
			required: true,
			localized: true,
		},
		{
			name: "text",
			type: "textarea",
			localized: true,
		},
		{
			name: "images",
			type: "upload",
			relationTo: "media",
			localized: false,
			hasMany: true,
			required: true,
			minRows: 1,
		}
	]
}

export const PresetTextAndImage: Block = {
	...TextAndImage,
	slug: 'preset-text-and-image',
	dbName: 'preset_text_and_image',
}