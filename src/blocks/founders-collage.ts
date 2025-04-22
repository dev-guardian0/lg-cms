import { Block } from 'payload';

export const FoundersCollage: Block = {
    slug: 'founders-collage',
    imageURL: '/img/blocks/founders-collage.png',
    dbName: 'founders_collages',
    labels: {
        singular: 'Founders Collage',
        plural: 'Founders Collages',
    },
    fields: [
        {
            name: 'quote',
            type: 'textarea',
            required: true,
            localized: true,
        },
        {
            name: 'leftImages',
            type: 'upload',
            relationTo: 'media',
            required: true,
            hasMany: true,
            localized: false,
        },
        {
            name: 'rightImages',
            type: 'upload',
            relationTo: 'media',
            required: true,
            hasMany: true,
            localized: false,
        },
    ]
}