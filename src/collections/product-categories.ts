import {CollectionConfig} from 'payload'

import {syncVendureProductCategories} from "@/handlers/products/sync-vendure-product-categories";
import SlugField from "@/components/fields/slug-field";

export const ProductCategories: CollectionConfig = {
	slug: 'product-categories',
	labels: {
		singular: 'Category',
		plural: 'Categories',
	},
	access: {
		read: () => true,
	},
	admin: {
		group: 'Products',
		useAsTitle: 'title',
		defaultColumns: ['title', 'updatedAt', 'defaultImage'],
		components: {
			views: {
				list: {
					actions: [
						'./components/sync-product-categories.tsx'
					]
				}
			}
		}
	},
	endpoints: [
		{
			path: '/sync-vendure',
			method: 'post',
			handler: syncVendureProductCategories,
		}
	],
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
				SlugField({name: 'slug', localized: false, required: true, targetField: 'title', label: 'Slug'}),
				{
					name: 'vendureSlug',
					type: 'text',
					required: true,
					localized: false,
				},
			]
		},
		{
			name: 'parentCategory',
			type: 'relationship',
			relationTo: 'product-categories',
			hasMany: false,
			required: false,
			index: true,
		},
		{
			name: 'defaultImage',
			type: 'upload',
			required: false,
			relationTo: 'media',
			localized: false,
			admin: {
				components: {
					Cell: '../components/cells/category-image.tsx',
				}
			}
		},
		{
			name: 'availableRegions',
			type: 'relationship',
			relationTo: 'regions',
			hasMany: true,
			required: false,
		}
	],
	timestamps: true,
}
