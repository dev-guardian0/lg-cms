import {CollectionConfig} from 'payload'

import SlugField from "@/components/fields/slug-field";
import {blocks} from "@/blocks/blocks";

export const Pages: CollectionConfig = {
	slug: 'pages',
	admin: {
		group: 'Content',
		useAsTitle: 'title',
		defaultColumns: ['title', 'slug', 'updatedAt'],
	},
	access: {
		read: () => true,
	},
	versions: {
		drafts: true
	},
	fields: [
		{
			type: 'tabs',
			tabs: [
				{
					label: "Page Info",
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
								SlugField({name: 'slug', localized: true, required: true, targetField: 'title', label: 'Slug'}),
							]
						},

						{
							name: 'description',
							type: 'textarea',
							required: false,
							localized: true,
						},
					]
				},
				{
					label: "Content",
					fields: [
						{
							name: 'style',
							label: "Page Style",
							type: 'select',
							defaultValue: 'default',
							options: [
								{label: 'Default', value: 'default'},
								{label: 'Dark', value: 'dark'},
							],
						},
						{
							name: 'content',
							type: 'blocks',
							required: true,
							blocks,
						},
					]
				},
			]
		},
	],
	timestamps: true,
}
