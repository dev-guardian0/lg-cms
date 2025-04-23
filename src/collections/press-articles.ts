import {CollectionConfig} from 'payload';

export const PressArticles: CollectionConfig = {
    slug: 'press-articles',
    admin: {
        group: 'Articles',
        useAsTitle: 'title',
        defaultColumns: ['title', 'publicationName', 'date', 'content'],
    },
    access: {
        read: () => true,
    },
    versions: {
        drafts: true
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'Article Title',
        },
        {
            name: 'date',
            type: 'date',
            required: true,
            label: 'Publication Date',
        },
        {
            name: 'publicationName',
            type: 'text',
            required: true,
            label: 'Publication Name',
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
            label: 'Content',
        },
    ],
}