import {Block} from 'payload';

export const FeatureCards: Block = {
    slug: 'feature-cards',
    imageURL: '/img/blocks/feature-cards.png',
    dbName: 'feature-cards',
    labels: {
        singular: 'The Feature Cards',
        plural: 'The Feature Cards',
    },
    fields: [
        {
            name: 'appearance',
            type: 'select',
            defaultValue: 'default',
            options: [
                {label: 'cards', value: 'default'},
                {label: 'styled cards', value: 'style'},
            ],
        },
        {
            name: "heading",
            type: "text",
            required: true,
            localized: true,
        },
        {
            name: "subheading",
            type: "text",
            required: true,
            localized: true,
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
                    name: "title",
                    type: "text",
                    required: true,
                },
                {
                    name: "description",
                    type: "textarea",
                    required: true,
                },
            ]
        },
    ]
}