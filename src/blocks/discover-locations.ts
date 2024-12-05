import {Block} from "payload";

export const DiscoverLocations: Block = {
	slug: 'discover-locations',
	imageURL: '/img/blocks/discover-locations.png',
	dbName: 'discover_locs',
	labels: {
		singular: 'Discover Locations',
		plural: 'Discover Locations',
	},
	fields: [
		{
			type: 'textarea',
			name: 'title',
			required: true,
			defaultValue: "Discover\nOther El Gaucho Locations",
			localized: true,
		}
	]
}