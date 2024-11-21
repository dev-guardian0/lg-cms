import {CollectionConfig} from 'payload'

import {Link} from "@/fields/Link";
import SlugField from "@/components/fields/slug-field";
// import {RowLabelArgs} from "payload/dist/admin/components/forms/RowLabel/types";

export const Menus: CollectionConfig = {
	slug: 'menus',
	admin: {
		group: 'Content',
		useAsTitle: 'title',
		defaultColumns: ['title', 'slug', 'updatedAt'],
	},
	versions: {
		drafts: true
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			type: 'row',
			fields: [
				{
					name: 'title',
					type: 'text',
					required: true,
					localized: true,
				},
				SlugField({name: 'slug', localized: false, required: true, targetField: 'title', label: 'Slug'}),
			]
		},
		{
			name: 'items',
			type: 'array',
			admin: {
				components: {
					RowLabel: '../components/row-labels/menu-label.tsx',
					// RowLabel: ({ data, index }: RowLabelArgs) => {
					// 	return data?.title || `Menu Item ${String(index).padStart(2, '0')}`
					// },
				},
				isSortable: true,
			},
			fields: [
				{
					type: 'row',
					fields: [
						{
							name: 'title',
							type: 'text',
							required: true,
							localized: true,
						},
						{
							name: 'type',
							type: 'select',
							defaultValue: 'link',
							options: [
								{label: 'Link', value: 'link'},
								{label: 'Submenu', value: 'submenu'},
								{label: 'Regions', value: 'regions'},
							],
						},
						{
							name: 'style',
							type: 'select',
							defaultValue: 'primary',
							options: [
								{label: 'Primary', value: 'primary'},
								{label: 'Highlight', value: 'highlight'},
							],
						},
					]
				},
				{
					name: 'subitems',
					type: 'array',
					admin: {
						components: {
							RowLabel: '../components/row-labels/menu-label.tsx',
							// RowLabel: ({ data, index }: RowLabelArgs) => {
							// 	return data?.title || `Menu Item ${String(index).padStart(2, '0')}`
							// },
						},
						condition: (_, siblingData) => siblingData?.type === 'submenu',
					},
					fields: [
						{
							name: 'title',
							type: 'text',
							required: true,
							localized: true,
						},
						Link({ disableLabel: true }),
					]
				},
				Link({ disableLabel: true, overrides: {
						admin: {
							//@ts-ignore
							condition: (_, siblingData:any) => siblingData?.type === 'link',
						}
				}})
			]
		},
	],

	timestamps: true,
}
