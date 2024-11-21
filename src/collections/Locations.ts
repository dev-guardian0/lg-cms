import {locales} from "@/types/locales";
import {CollectionConfig} from "payload";

export const Locations: CollectionConfig = {
	slug: 'locations',
	admin: {
		group: 'Regions',
		useAsTitle: 'title',
		defaultColumns: ['title', 'region', 'updatedAt'],
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
			name: 'description',
			type: 'textarea',
			required: true,
			localized: true,
		},
		{
			name: 'google_map_url',
			label: 'Google Map URL',
			type: 'text',
			required: true,
		},
		{
			type: 'row',
			fields: [
				{
					name: 'phone',
					type: 'text',
					required: true,
				},
				{
					name: 'email',
					type: 'text',
					required: true,
				},
			]
		},
		{
			name: 'coordinates',
			type: 'point',
			index: true,
		},
		{
			name: 'address1',
			label: 'Address 1',
			type: 'text',
			required: true,
		},
		{
			name: 'address2',
			label: 'Address 2',
			type: 'text',
			required: false,
		},
		{
			type: 'row',
			fields: [
				{
					name: 'district',
					type: 'text',
				},
				{
					name: 'ward',
					type: 'text',
				},
			]
		},
		{
			name: 'city',
			type: 'relationship',
			relationTo: 'cities',
			hasMany: false,
			required: true,
			index: true,
		},
		{
			name: 'hours',
			type: 'array',
			admin: {
				components: {
					RowLabel: '../components/row-labels/store-hours-label.tsx',
				},
				// components: {
				// 	Label: ({ data, index }: any) => {
				// 		if (!data || !data.day || !data.open || !data.close) {
				// 			return 'Hours'
				// 		}
				//
				// 		return `${data.day} - ${data.open} - ${data.close}`;
				// 	},
				// },
				isSortable: true,
			},
			fields: [
				{
					name: 'day',
					type: 'select',
					options: [
						{label: 'Monday', value: 'monday'},
						{label: 'Tuesday', value: 'tuesday'},
						{label: 'Wednesday', value: 'wednesday'},
						{label: 'Thursday', value: 'thursday'},
						{label: 'Friday', value: 'friday'},
						{label: 'Saturday', value: 'saturday'},
						{label: 'Sunday', value: 'sunday'},
					],
					required: true,
				},
				{
					name: 'open',
					type: 'text',
					required: true,
				},
				{
					name: 'close',
					type: 'text',
					required: true,
				},
			]
		}
	],
	timestamps: true,
}
