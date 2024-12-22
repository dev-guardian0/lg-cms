import {Block} from "payload";

export const CitiesFilter: Block = {
	slug: 'cities-filter',
	imageURL: '/img/blocks/cities-filter.png',
	dbName: 'cities_filter_block',
	labels: {
		singular: 'Cities Filter',
		plural: 'Cities Filters',
	},
	fields: [
	]
}

export const PresetCitiesFilter: Block = {
	...CitiesFilter,
	slug: 'preset-cities-filter',
	dbName: 'preset_cities_filter',
}