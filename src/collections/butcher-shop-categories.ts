import {CollectionConfig} from 'payload'

// import {SlugField} from "@nouance/payload-better-fields-plugin";
// import {SyncButcherCategoriesButton} from "@/components/sync-butcher-categories";
import {syncVendure} from "@/handlers/butcher/sync-vendure";
import SlugField from "@/components/fields/slug-field";

export const ButcherShopCategories: CollectionConfig = {
	slug: 'butcher-categories',
	labels: {
		singular: 'Butcher Shop Category',
		plural: 'Butcher Shop Categories',
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
						'./components/sync-butcher-categories.tsx'
					]
				}
			},
			// beforeListTable: ['./components/sync-butcher-categories.tsx'],
		}
	},
	endpoints: [
		{
			path: '/sync-vendure',
			method: 'post',
			handler: syncVendure,
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
				SlugField({name: 'slug', localized: true, required: true, targetField: 'title', label: 'Slug'}),
				{
					name: 'vendureSlug',
					type: 'text',
					required: true,
					localized: false,
				},
			]
		},
		{
			name: 'defaultImage',
			type: 'upload',
			required: true,
			relationTo: 'media',
			localized: true,
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
