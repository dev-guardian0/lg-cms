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
			name: "style",
			type: "select",
			defaultValue: 'default',
			options: [
				{label: 'Default', value: 'default'},
				{label: 'Alternate', value: 'alt'},
			],
		},
		{
			name: "title",
			type: "text",
			required: true,
			localized: true,
			admin: {
				condition: (data:any, siblingData: any) => {
					return siblingData?.style === 'default';
				},
			},
		},
		{
			name: "image",
			type: "upload",
			relationTo: "media",
			required: true,
			localized: false,
			admin: {
				condition: (data:any, siblingData: any) => {
					return siblingData?.style === 'alt';
				},
			},
		},
		{
			name: "testimonies",
			type: "array",
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

export const PresetTestimonials: Block = {
	...Testimonials,
	slug: 'preset-testimonials',
	dbName: 'preset_testimonials',
}