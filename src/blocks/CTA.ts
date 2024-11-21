import {Block} from "payload";
import {Link} from "@/fields/Link";

export const CTA: Block = {
	slug: 'cta',
	dbName: 'ctas',
	labels: {
		singular: 'Call to Action',
		plural: 'Calls to Action',
	},
	fields: [
		{
			name: 'media',
			type: 'upload',
			relationTo: 'media',
			localized: true,
		},
		{
			name: "title",
			type: "text",
			localized: true,
		},
		{
			name: "links",
			type: "array",
			fields: [
				{
					name: 'style',
					type: 'select',
					defaultValue: 'primary',
					options: [
						{label: 'Primary', value: 'primary'},
						{label: 'Highlight', value: 'highlight'},
					],
				},
				Link(),
			],
		}
	]
}