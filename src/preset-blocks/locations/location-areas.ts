import {Block} from "payload";

export const LocationAreas: Block = {
	slug: 'location-areas',
	imageURL: '/img/blocks/location-areas.png',
	dbName: 'loc_areas',
	labels: {
		singular: 'Location Areas',
		plural: 'Location Areas',
	},
	fields: [		{
		name: "title",
		type: "textarea",
		required: true,
		localized: true,
	},
	]
}