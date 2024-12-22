import {CollectionConfig} from 'payload'

import SlugField from "@/components/fields/slug-field";
import {blocks} from "@/blocks/blocks";

export const Careers: CollectionConfig = {
	slug: 'careers',
	admin: {
		group: 'Careers',
		useAsTitle: 'title',
		defaultColumns: ['title', 'cities', 'updatedAt'],
	},
	access: {
		read: () => true,
	},
	versions: {
		drafts: true
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
			localized: true,
		},
		{
			name: 'cities',
			type: 'relationship',
			relationTo: 'cities',
			hasMany: true,
			required: true,
		},
		{
			name: 'overview',
			type: 'richText',
			required: true,
			localized: true,
		},
		{
			name: 'description',
			type: 'richText',
			required: true,
			localized: true,
		},
		{
			name: 'requirements',
			type: 'richText',
			required: true,
			localized: true,
		},
		{
			name: 'schedule',
			type: 'richText',
			required: false,
			localized: true,
		},
		{
			name: 'benefits',
			type: 'richText',
			required: false,
			localized: true,
		},
		{
			name: "applications",
			type: "relationship",
			relationTo: "career-applications",
			hasMany: true,
			required: false,
		}
	],
	timestamps: true,
}
