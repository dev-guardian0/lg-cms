import {CollectionConfig} from 'payload'

import SlugField from "@/components/fields/slug-field";
import {blocks} from "@/blocks/blocks";

export const CareerApplications: CollectionConfig = {
	slug: 'career-applications',
	labels: {
		singular: 'Application',
		plural: 'Applications',
	},
	admin: {
		group: 'Careers',
		useAsTitle: 'name',
		defaultColumns: ['name', 'career', 'updatedAt'],
	},
	access: {
		read: () => true,
	},
	versions: {
		drafts: true
	},
	fields: [
		{
			name: 'name',
			type: 'text',
			required: true,
			localized: false,
		},
		{
			name: 'phone',
			type: 'text',
			required: true,
			localized: false,
		},
		{
			name: 'email',
			type: 'text',
			required: true,
			localized: false,
		},
		{
			name: 'cv_url',
			type: 'text',
			required: false,
			localized: false,
		},
		{
			name: 'career',
			type: 'relationship',
			relationTo: 'careers',
			required: false,
		},
	],
	timestamps: true,
}
