import {Block} from 'payload';

export const GauchoWay: Block = {
    slug: 'gaucho-way',
    imageURL: '/img/blocks/gaucho-way.png',
    dbName: 'gaucho-ways',
    labels: {
        singular: 'The Gaucho Way',
        plural: 'The Gaucho Way',
    },
    fields: [
        {
			name: "title",
			type: "text",
			required: true,
			localized: true,
		},
        {
			name: "description",
			type: "text",
			required: true,
			localized: true,
		},
        {
			name: "ways",
			type: "array",
			required: true,
			fields: [
				{
					name: "image",
					type: "upload",
					relationTo: "media",
					required: true,
				},
				{
					name: "title",
					type: "text",
					required: true,
				},
				{
					name: "content",
					type: "textarea",
					required: true,
				},
			]
		},
    ]
}