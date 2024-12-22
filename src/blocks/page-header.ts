import {Block} from "payload";
import {Link} from "@/fields/Link";

export const PageHeader: Block = {
	slug: 'page-header',
	imageURL: '/img/blocks/page-header.png',
	dbName: 'page_header',
	labels: {
		singular: 'Page Header',
		plural: 'Page Headers',
	},
	fields: [
		{
			name: "title",
			type: "textarea",
			required: true,
			localized: true,
		},
		{
			name: "text",
			type: "textarea",
			localized: true,
		},
		{
			name: "links",
			type: "array",
			admin: {
				components: {
					RowLabel: '../components/row-labels/links-label.tsx',
				},
			},
			fields: [
				Link(),
			]
		}
	]
}

export const PresetPageHeader: Block = {
	...PageHeader,
	slug: 'preset-page-header',
	dbName: 'preset_page_header',
}