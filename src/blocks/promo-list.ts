import {Block} from "payload";

export const PromoList: Block = {
	slug: 'promo-list',
	imageURL: '/img/blocks/promo-list.png',
	dbName: 'promo_list',
	labels: {
		singular: 'Promotions List',
		plural: 'Promotions Lists',
	},
	fields: [
		{
			name: "title",
			type: "textarea",
			required: true,
			localized: true,
		},
	]
}

export const PresetPromoList: Block = {
	...PromoList,
	slug: 'preset-promo-list',
	dbName: 'preset_promo_list',
}