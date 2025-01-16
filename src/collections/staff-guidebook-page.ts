import {CollectionConfig} from 'payload'
import SlugField from "@/components/fields/slug-field";

export const StaffGuidebookPage: CollectionConfig = {
	slug: 'staff-guidebook-pages',
	dbName: 'staff_gb_pages',
	admin: {
		group: 'Staff App',
		useAsTitle: 'title',
		defaultColumns: ['title', 'slug', 'updatedAt'],
	},
	labels: {
		singular: 'Guidebook Page',
		plural: 'Guidebook Pages',
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
					name: 'title',
					type: 'text',
					required: true,
					localized: true,
				},
				SlugField({name: 'slug', localized: true, required: true, targetField: 'title', label: 'Slug'}),
			]
		},
		{
			name: 'category',
			type: 'relationship',
			relationTo: 'staff-guidebook-categories',
			hasMany: false,
			required: true,
			index: true,
		},
		{
			name: 'text',
			type: 'richText',
			required: false,
			localized: true,
		},
	],
	timestamps: true,
}
