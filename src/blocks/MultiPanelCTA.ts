import {Block} from "payload";
import {Link} from "@/fields/Link";
// import {RowLabelArgs} from "payload/dist/admin/components/forms/RowLabel/types";

export const MultiPanelCTA: Block = {
	slug: 'multi-panel-cta',
	imageURL: '/img/blocks/multi-panel-cta.png',
	labels: {
		singular: 'Multi Panel CTA',
		plural: 'Multi Panel CTAs',
	},
	dbName: 'multi_panel_cta',
	fields: [
		{
			name: "basicInfo",
			type: 'group',
			fields: [
				{
					name: 'appearance',
					type: 'select',
					defaultValue: 'simple',
					options: [
						{label: 'Simple', value: 'simple'},
						{label: 'Promo', value: 'promo'},
					],
				},
				{
					name: 'backgroundImage',
					type: 'upload',
					required: false,
					relationTo: 'media',
					localized: true,
					admin: {
						condition: (_, siblingData) => siblingData?.appearance === 'promo',
					}
				},
				{
					name: "title",
					type: "text",
					required: false,
					localized: true,
					admin: {
						condition: (_, siblingData) => siblingData?.appearance === 'simple',
					}
				},
				{
					name: "description",
					type: "textarea",
					localized: true,
					admin: {
						condition: (_, siblingData) => siblingData?.appearance === 'simple',
					}
				},
			]
		},
		{
			name: "panels",
			type: "array",
			minRows: 1,
			maxRows: 3,
			admin: {
				components: {
					RowLabel: '../components/row-labels/multi-panel-cta-label.tsx',
				},
			},
			fields: [
				{
					name: "image",
					type: "upload",
					relationTo: "media",
					localized: true,
				},
				{
					name: "title",
					type: "textarea",
					required: true,
					localized: true,
				},
				{
					name: "subtitle",
					type: "text",
					localized: true,
				},
				{
					name: "text",
					type: "textarea",
					required: true,
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
						Link({hasAppearances: true}),
					]
				}
			]
		}
	]
}