import {Block} from "payload";
import {Link} from "@/fields/Link";

export const CTA: Block = {
	slug: 'cta',
	imageURL: '/img/blocks/cta.png',
	dbName: 'ctas',
	labels: {
		singular: 'CTA',
		plural: 'CTAs',
	},
	fields: [
		{
			name: "title",
			type: "textarea",
			required: true,
			localized: true,
		},
		{
			name: "links",
			type: "array",
			fields: [
				Link({hasAppearances: true}),
			]
		}
	]
}

export const PresetCTA: Block = {
	...CTA,
	slug: 'preset-cta',
	dbName: 'preset_ctas',
}