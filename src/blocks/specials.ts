import {Block} from "payload";
import {Link} from "@/fields/Link";

export const Specials: Block = {
	slug: 'specials',
	imageURL: '/img/blocks/specials.png',
	dbName: 'specials',
	labels: {
		singular: 'Specials',
		plural: 'Specials',
	},
	fields: [
		{
			name: "title",
			type: "textarea",
			required: true,
			localized: true,
		},
		{
			name: "subtitle",
			type: "text",
			required: false,
			localized: true,
		},
		{
			name: "style",
			type: "select",
			defaultValue: 'default',
			options: [
				{label: 'Default', value: 'default'},
				{label: 'Product Page', value: 'product-page'},
			],
		},
		{
			name: "shop",
			type: "select",
			defaultValue: 'butcher-shop',
			options: [
				{label: 'Butcher Shop', value: 'butcher-shop'},
				{label: 'All Day Dining', value: 'all-day-dining'},
			],
		},
	]
}

export const PresetSpecials: Block = {
	...Specials,
	slug: 'preset-specials',
	dbName: 'preset_specials',
}