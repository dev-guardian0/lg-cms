import {Block} from "payload";
import {Link} from "@/fields/Link";

export const Carousel: Block = {
	slug: 'carousel',
	imageURL: '/img/blocks/carousel.png',
	dbName: 'carousels',
	labels: {
		singular: 'Carousel',
		plural: 'Carousels',
	},
	fields: [
		{
			name: "style",
			type: "select",
			defaultValue: 'plain',
			options: [
				{label: 'Plain', value: 'plain'},
				{label: 'Full Width', value: 'full-width'},
			],
		},
		{
			name: "title",
			type: "text",
			required: false,
			localized: true,
			admin: {
				condition: (data:any, siblingData: any) => {
					return siblingData.style !== 'full-width';
				},
			},
		},
		{
			name: 'slides',
			type: 'array',
			fields: [
				{
					name: 'image',
					type: 'upload',
					relationTo: 'media',
					required: true,
					localized: false,
				},
				Link({required: false}),
			]
		},
	]
}

export const PresetCarousel: Block = {
	...Carousel,
	slug: 'preset-carousel',
	dbName: 'preset_carousels',
}