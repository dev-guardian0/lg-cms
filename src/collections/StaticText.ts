import {CollectionConfig} from 'payload'
import SlugField from "@/components/fields/slug-field";

export const StaticText: CollectionConfig = {
	slug: 'static-text',
	admin: {
		group: 'Content',
		useAsTitle: 'text',
		defaultColumns: ['text', 'slug', 'description', 'updatedAt'],
	},
	labels: {
		singular: 'Static Text',
		plural: 'Static Text',
	},
	access: {
		read: () => true,
	},
	versions: {
		drafts: false
	},
	fields: [
		{
			type: 'row',
			fields: [
				{
					name: 'text',
					type: 'textarea',
					required: true,
					localized: true,
				},
				SlugField({name: 'slug', localized: false, required: true, targetField: 'title', label: 'Slug'}),
			]
		},
		{
			name: 'description',
			type: 'text',
		},
	],
	timestamps: true,
}
