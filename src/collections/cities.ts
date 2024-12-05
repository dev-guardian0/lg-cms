import {locales} from "@/types/locales";
import {timezones} from "@/types/timezones";
import {CollectionConfig} from "payload";

export const Cities: CollectionConfig = {
	slug: 'cities',
	admin: {
		group: 'Regions',
		useAsTitle: 'city',
		defaultColumns: ['city', 'updatedAt'],
	},
	labels: {
		singular: 'City',
		plural: 'Cities',
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
					name: 'city',
					type: 'text',
					required: true,
					localized: true,
				},
				{
					name: 'slug',
					type: 'text',
					required: true,
					localized: true,
					index: true,
				},
			]
		},
		{
			name: 'coordinates',
			type: 'point',
			index: true,
		},
		{
			name: 'timezone',
			type: 'select',
			options: timezones,
			required: true,
		},
		{
			name: 'region',
			type: 'relationship',
			relationTo: 'regions',
			hasMany: false,
			required: true,
			index: true,
		}
	],
	timestamps: true,
}
