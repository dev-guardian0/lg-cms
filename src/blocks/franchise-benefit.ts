import {Block} from 'payload';
import {Link} from "@/fields/Link";

export const FranchiseBenefit: Block = {
    slug: 'franchise-benefit',
    imageURL: '/img/blocks/franchise-benefit.png',
    dbName: 'franchise-benefits',
    labels: {
        singular: 'Franchise Benefit',
        plural: 'Franchise Benefits',
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
            name: "benefits",
            type: "array",
            required: true,
            fields: [
                {
                    name: "icon",
                    type: "upload",
                    relationTo: "media",
                    required: true,
                },
                {
                    name: "title",
                    type: "text",
                    required: true,
                    localized: true,
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