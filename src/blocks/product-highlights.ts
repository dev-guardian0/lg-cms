import {Block} from "payload";

export const ProductHighlights: Block = {
	slug: 'product-highlights',
	imageURL: '/img/blocks/product-highlights.png',
	labels: {
		singular: 'Products Highlight',
		plural: 'Products Highlights',
	},
	dbName: 'product_highlights',
	fields: [
		{
			name: "basicInfo",
			type: 'group',
			fields: [
				{
					name: "title",
					type: "text",
					required: false,
					localized: true,
				},
				{
					name: "description",
					type: "textarea",
					required: false,
					localized: true,
				},
			]
		},
		{
			name: "categories",
			type: "relationship",
			relationTo: "product-categories",
			hasMany: true,
			required: true,
		},
	]
}

export const PresetProductHighlights: Block = {
	...ProductHighlights,
	slug: 'preset-product-highlights',
	dbName: 'preset_product_highlights',
}