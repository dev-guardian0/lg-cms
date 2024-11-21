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
			name: 'backgroundImage',
			type: 'upload',
			relationTo: 'media',
			required: true,
			localized: true,
		},
		{
			name: "title",
			type: "text",
			required: true,
			localized: true,
		},
		{
			name: "subtitle",
			type: "text",
			localized: true,
		},
		Link(),
	]
}