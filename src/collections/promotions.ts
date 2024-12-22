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
				{
					name: 'subtitle',
					type: 'text',
					required: false,
					localized: true,
				},
				SlugField({name: 'slug', localized: true, required: true, targetField: 'title', label: 'Slug'}),
			]
		},
		{
			name: "regions",
			type: "relationship",
			relationTo: "regions",
			required: false,
		},
		{
			type: "row",
			fields: [
				{
					name: "startDate",
					type: "date",
					required: false,
					localized: false,
				},
				{
					name: "endDate",
					type: "date",
					required: false,
					localized: false,
				},
			]
		},
		{
			name: "text",
			type: "richText",
			required: true,
			localized: true,
		},
		{
			name: "promoImage",
			type: "upload",
			relationTo: "media",
			required: true,
			localized: true,
		},
		{
			name: "mobilePromoImage",
			type: "upload",
			relationTo: "media",
			required: false,
			localized: true,
		},
	],
	timestamps: true,
}
