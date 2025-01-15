import {CollectionConfig} from 'payload'

import {locales} from "@/types/locales";
import {timezones} from "@/types/timezones";
import SlugField from "@/components/fields/slug-field";

export const Regions: CollectionConfig = {
	slug: 'regions',
	admin: {
		group: 'Regions',
		useAsTitle: 'title',
		defaultColumns: ['title', 'hostUrl', 'defaultLocale', 'updatedAt'],
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
		{
			name: 'country_code',
			type: 'text',
			required: true,
		},
		{
			name: 'coordinates',
			type: 'point',
			index: true,
		},
		{
			name: 'defaultLocale',
			type: 'select',
			hasMany: false,
			options: locales
		},
		{
			name: 'availableLocales',
			type: 'select',
			hasMany: true,
			options: locales
		},
		{
			name: 'hostnames',
			label: 'Host Names',
			index: false,
			type: 'textarea',
			required: true,
		},
		{
			name: 'vendureChannel',
			label: 'Vendure Channel',
			index: true,
			type: 'text',
			required: true,
		},
		{
			name: 'vendureDeliveryChannel',
			label: 'Vendure Delivery Channel',
			index: true,
			type: 'text',
			required: true,
		}
	],
	timestamps: true,
}
