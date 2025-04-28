import {Block} from 'payload';
import {Link} from "@/fields/Link";

export const FranchiseIntros: Block = {
    slug: 'franchise-intros',
    imageURL: '/img/blocks/franchise-intro.png',
    dbName: 'franchise-intros',
    labels: {
        singular: 'Franchise Intro',
        plural: 'Franchise Intro',
    },
    fields: [
        {
			name: "title",
			type: "text",
			required: true,
			localized: true,
		},
        {
			name: "subtitle",
			type: "text",
			required: true,
			localized: true,
		},
		{
			name: "links",
			type: "array",
			fields: [
				Link({hasAppearances: true}),
			]
		},
        {
            name: "intros",
            type: "array",
            fields: [
				{
					name: "paragraph",
					type: "textarea",
                    required: true,
                    localized: true,
				},
            ]
        },
        {
			name: "cards",
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
					name: "description",
					type: "textarea",
					required: true,
                    localized: true,
				},
			]
		},
    ]
}