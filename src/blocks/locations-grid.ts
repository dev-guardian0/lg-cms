import {Block} from "payload";

export const LocationsGrid: Block = {
	slug: 'locations-grid',
	imageURL: '/img/blocks/locations-grid.png',
	dbName: 'locations_grid',
	labels: {
		singular: 'Locations Grid',
		plural: 'Locations Grids',
	},
	fields: [
	]
}

export const PresetLocationsGrid: Block = {
	...LocationsGrid,
	slug: 'preset-locations-grid',
	dbName: 'preset_locations_grid',
}