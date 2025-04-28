import {Block} from 'payload';

export const FranchiseHero: Block = {
    slug: 'franchise-hero',
    imageURL: '/img/blocks/franchise-hero.png',
    dbName: 'franchise_heroes',
    labels: {
        singular: 'Franchise Hero',
        plural: 'Franchise Heroes',
    },
    fields: [
        {
            name: 'images',
            type: 'upload',
            relationTo: 'media',
            required: true,
            hasMany: true,
            localized: false,
        },
    ],
}