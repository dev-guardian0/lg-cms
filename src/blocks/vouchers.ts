import {Block} from "payload";

export const Vouchers: Block = {
	slug: 'vouchers',
	imageURL: '/img/blocks/vouchers.png',
	dbName: 'vouchers',
	labels: {
		singular: 'Voucher List',
		plural: 'Voucher List',
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			localized: true,
		},
		{
			name: "description",
			type: "textarea",
			required: true,
			localized: true,
		},
		{
			name: "amount_presets",
			label: "Amount Presets",
			type: "array",
			fields: [
				{
					name: 'region',
					type: 'relationship',
					relationTo: 'regions',
					hasMany: false,
					required: true,
					index: false,
				},
				{
					name: "disclaimer",
					type: "text",
					required: false,
					localized: true,
				},
				{
					name: "amounts",
					type: "array",
					fields: [
						{
							name: "amount",
							type: "number",
							required: true,
						},
					]
				}
			]
		}
	]
}

export const PresetVouchers: Block = {
	...Vouchers,
	slug: 'preset-vouchers',
	dbName: 'preset_vouchers',
}