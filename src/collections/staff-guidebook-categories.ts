import {CollectionConfig} from 'payload'
import SlugField from "@/components/fields/slug-field";

export const StaffGuidebookCategories: CollectionConfig = {
	slug: 'staff-guidebook-categories',
	dbName: 'staff_gb_categories',
	admin: {
		group: 'Staff App',
		useAsTitle: 'category',
		defaultColumns: ['category', 'slug', 'updatedAt'],
	},
	labels: {
		singular: 'Guidebook Category',
		plural: 'Guidebook Categories',
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
					name: 'category',
					type: 'text',
					required: true,
					localized: true,
				},
				SlugField({name: 'slug', localized: true, required: true, targetField: 'category', label: 'Slug'}),
			]
		},
	],
	timestamps: true,
}
