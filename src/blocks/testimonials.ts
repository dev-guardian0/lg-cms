import {Block} from "payload";

export const Testimonials: Block = {
	slug: 'testimonials',
	imageURL: '/img/blocks/testimonials.png',
	dbName: 'testimonials',
	labels: {
		singular: 'Testimonials',
		plural: 'Testimonials',
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			localized: true,
		},
		{
			name: "testimonies",
			type: "array",
			minRows: 3,
			required: true,
			fields: [
				{
					name: "image",
					type: "upload",
					relationTo: "media",
					required: true,
				},
				{
					name: "name",
					type: "text",
					required: true,
				},
				{
					name: "testimony",
					type: "textarea",
					required: true,
				},
				{
					name: "rating",
					type: "number",
					required: true,
					defaultValue: 5,
					min: 1,
					max: 5,
				}
			]
		},
	]
}