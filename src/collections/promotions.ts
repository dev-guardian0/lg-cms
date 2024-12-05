import {CollectionConfig} from 'payload'

import SlugField from "@/components/fields/slug-field";
import {blocks} from "@/blocks/blocks";

export const Promotions: CollectionConfig = {
	slug: 'promotions',
	admin: {
		group: 'Products',
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
	],
	timestamps: true,
}
