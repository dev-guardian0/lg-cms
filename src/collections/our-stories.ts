import {Block} from 'payload';

export const OurStories: Block = {
    slug: 'our-stories',
    imageURL: '/img/blocks/our-stories.png',
    dbName: 'our-stories',
    labels: {
        singular: 'Our Story',
        plural: 'Our Stories',
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
			name: "stories",
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
					name: "year",
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