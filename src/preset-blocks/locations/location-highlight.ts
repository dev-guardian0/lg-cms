import {Block} from "payload";

export const LocationHighlight: Block = {
	slug: 'location-highlight',
	imageURL: '/img/blocks/location-highlight.png',
	dbName: 'loc_highlight',
	labels: {
		singular: 'Location Highlight',
		plural: 'Location Highlights',
	},
	fields: [
		{
			name: 'title',
			type: 'textarea',
			required: true,
			localized: true,
		},
		{
			name: 'text',
			type: 'textarea',
			required: true,
			localized: true,
		},
		{
			name: 'images',
			type: 'upload',
			relationTo: 'media',
			hasMany: true,
			required: true,
			min: 3,
		}
	]
}