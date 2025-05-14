import {CollectionConfig} from 'payload';

export const TermsAndPolicies: CollectionConfig = {
	slug: 'terms-and-policies',
	admin: {
		group: 'Regions',
		useAsTitle: 'title',
		defaultColumns: ['type', 'title', 'content', 'createdAt', 'updatedAt'],
	},
	access: {
		read: () => true,
	},
	versions: {
		drafts: true
	},
	fields: [
		{
			name: 'type',
			label: 'Type',
			type: 'select',
			options: [
				{label: 'Terms', value: 'terms'},
				{label: 'Policies', value: 'policies'},
			],
			required: true,
		},
		{
			name: 'title',
			label: 'Title',
			type: 'text',
			required: true,
			localized: true,
		},
		{
			name: 'content',
			label: 'Content',
			type: 'textarea',
			required: true,
			localized: true,
		},
	],
	timestamps: true,
}
