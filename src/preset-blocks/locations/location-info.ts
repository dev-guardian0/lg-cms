import {Block} from "payload";

export const LocationInfo: Block = {
	slug: 'location-info',
	imageURL: '/img/blocks/location-info.png',
	dbName: 'loc_info',
	labels: {
		singular: 'Location Info',
		plural: 'Location Infos',
	},
	fields: [
		{
			type: 'upload',
			name: 'bgImage',
			relationTo: 'media',
			required: true,
			localized: false,
		},
	]
}