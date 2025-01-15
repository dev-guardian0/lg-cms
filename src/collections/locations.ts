import {locales} from "@/types/locales";
import {CollectionConfig} from "payload";
import SlugField from "@/components/fields/slug-field";

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
			type: 'tabs',
			tabs: [
				{
					label: "Location Info",
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
							name: 'description',
							type: 'textarea',
							required: true,
							localized: true,
						},
						{
							name: 'generalHours',
							type: 'text',
							required: true,
							localized: true,
						},
						{
							name: 'vendureChannel',
							type: 'text',
							required: true,
							localized: false,
						},
						{
							name: 'vendureDeliveryChannel',
							label: 'Vendure Delivery Channel',
							index: true,
							type: 'text',
							required: true,
						},
						{
							name: 'wixLocationId',
							label: 'Wix Location Id',
							index: true,
							type: 'text',
							required: false,
						}
					],
				},
				{
					label: "Address",
					fields: [

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
							name: 'google_map_url',
							label: 'Google Map URL',
							type: 'text',
							required: true,
						},
						{
							name: 'coordinates',
							type: 'point',
							index: true,
						},
					]
				},
				{
					label: "Hours",
					fields: [
						{
							name: 'hours',
							type: 'array',
							admin: {
								components: {
									RowLabel: '../components/row-labels/store-hours-label.tsx',
								},
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
					]
				},
				{
					label: "Media",
					fields: [
						{
							name: 'primaryImage',
							type: 'upload',
							relationTo: 'media',
							required: true,
							localized: false,
							admin: {
								components: {
									Cell: '../components/cells/location-image.tsx',
								}
							},
						},
						{
							name: 'heroImage',
							type: 'upload',
							relationTo: 'media',
							required: true,
							localized: false,
						},
						{
							name: 'contentImages',
							type: 'upload',
							relationTo: 'media',
							required: false,
							hasMany: true,
							localized: false,
						},
					]
				},
				{
					label: "Areas",
					fields: [
						{
							name: 'areas',
							type: 'array',
							admin: {
								components: {
									RowLabel: '../components/row-labels/areas-label.tsx',
								},
								isSortable: true,
							},
							fields: [
								{
									name: 'name',
									type: 'text',
									required: true,
									localized: true,
								},
								{
									name: 'seating',
									type: 'number',
									required: false,
								},
								{
									name: 'description',
									type: 'textarea',
									required: true,
									localized: true,
								},
								{
									type: 'row',
									fields: [
										{
											name: 'phone',
											type: 'text',
											required: false,
										},
										{
											name: 'email',
											type: 'text',
											required: false,
										},
									]
								},
								{
									name: 'images',
									type: 'upload',
									relationTo: 'media',
									required: true,
									hasMany: true,
									localized: false,
								},
							]
						},
					]
				},
			]
		},
	],
	timestamps: true,
}
