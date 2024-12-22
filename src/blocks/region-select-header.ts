import {Block} from "payload";
import {Link} from "@/fields/Link";

export const RegionSelectHeader: Block = {
	slug: 'region-select-header',
	imageURL: '/img/blocks/region-select-header.png',
	dbName: 'region_select',
	labels: {
		singular: 'Region Select Header',
		plural: 'Region Select Headers',
	},
	fields: [
		{
			name: "line1",
			label: "First Line",
			type: "text",
			defaultValue: "Discover",
			required: true,
			localized: true,
		},
		{
			name: "line2",
			label: "Second Line",
			defaultValue: "El Gaucho In",
			type: "text",
			required: true,
			localized: true,
		},
		{
			name: "links",
			type: "array",
			fields: [
				Link(),
			]
		}
	]
}

export const PresetRegionSelectHeader: Block = {
	...RegionSelectHeader,
	slug: 'preset-region-select-header',
	dbName: 'preset_region_select',
}