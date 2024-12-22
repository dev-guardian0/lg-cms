import {Block} from "payload";

export const CareersGrid: Block = {
	slug: 'careers-grid',
	imageURL: '/img/blocks/careers-grid.png',
	dbName: 'careers_grid',
	labels: {
		singular: 'Careers Grid',
		plural: 'Careers Grids',
	},
	fields: [
		{
			name: "style",
			type: "select",
			defaultValue: 'full-grid',
			options: [
				{label: 'Full Grid', value: 'full-grid'},
				{label: 'See Others', value: 'embedded'},
			],
		},
		{
			name: "title",
			type: "text",
			required: true,
			localized: true,
		},
		{
			name: "subtitle",
			type: "text",
			required: true,
			localized: true,
			admin: {
				condition: (data:any, siblingData: any) => {
					return siblingData.style === 'full-grid';
				},
			},
		},
		{
			name: "description",
			type: "textarea",
			required: false,
			localized: true,
			admin: {
				condition: (data:any, siblingData: any) => {
					return siblingData.style === 'full-grid';
				},
			},
		},
		{
			name: "bgImage",
			type: "upload",
			required: false,
			relationTo: 'media',
			localized: false,
			admin: {
				condition: (data:any, siblingData: any) => {
					return siblingData.style === 'full-grid';
				},
			},
		},
	]
}

export const PresetCareersGrid: Block = {
	...CareersGrid,
	slug: 'preset-careers-grid',
	dbName: 'preset_careers_grid',
}