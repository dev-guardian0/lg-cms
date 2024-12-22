import {Block} from "payload";
import {Link} from "@/fields/Link";

export const Hero: Block = {
	slug: 'hero',
	imageURL: '/img/blocks/hero.png',
	dbName: 'heroes',
	labels: {
		singular: 'Hero',
		plural: 'Heroes',
	},
	fields: [
		{
			name: "type",
			type: "select",
			defaultValue: 'default',
			options: [
				{label: 'Single Link', value: 'default'},
				{label: 'Multiple Links', value: 'multi-link'},
			],
		},
		{
			name: "alignment",
			type: "select",
			defaultValue: 'center',
			options: [
				{label: 'Center', value: 'center'},
				{label: 'Left', value: 'left'},
			],
		},
		{
			name: 'icon',
			type: 'upload',
			relationTo: 'media',
			required: false,
			localized: false,
		},
		{
			name: 'backgroundImage',
			type: 'upload',
			relationTo: 'media',
			required: true,
			localized: true,
		},
		{
			name: "title",
			type: "textarea",
			required: true,
			localized: true,
		},
		{
			name: "subtitle",
			type: "text",
			localized: true,
		},
		Link({
			overrides: {
				admin: {
					condition: (data:any, siblingData: any) => {
						return siblingData.type !== 'multi-link';
					},
				},
			}
		}),
		{
			name: "links",
			type: "array",
			admin: {
				condition: (data:any, siblingData: any) => {
					return siblingData.type === 'multi-link';
				},
			},
			fields: [
				Link({hasAppearances: true}),
			]
		}
	]
}

export const PresetHero: Block = {
	...Hero,
	slug: 'preset-hero',
	dbName: 'preset_heroes',
}