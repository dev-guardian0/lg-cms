import {Block} from "payload";

export const Shop: Block = {
	slug: 'shop',
	imageURL: '/img/blocks/shop.png',
	dbName: 'shop',
	labels: {
		singular: 'Shop',
		plural: 'Shops',
	},
	fields: [
		{
			name: "type",
			type: "select",
			defaultValue: 'butcher-shop',
			options: [
				{label: 'Butcher Shop', value: 'butcher-shop'},
				{label: 'All Day Dining', value: 'all-day-dining'},
				{label: 'Gift Cards', value: 'gift-cards'},
				{label: 'Merchandise', value: 'merchandise'},
			]
		}
	]
}

export const PresetShop: Block = {
	...Shop,
	slug: 'preset-shop',
	dbName: 'preset_shop',
}