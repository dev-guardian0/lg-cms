import {Block} from 'payload';

export const Articles: Block = {
    slug: 'articles',
    imageURL: '/img/blocks/articles.png',
    labels: {
        singular: 'Article',
        plural: 'Articles',
    },
    fields: [
        {
			name: "article",
			type: "array",
			fields: [
                {
                    name: 'item',
                    type: 'relationship',
                    relationTo: 'press-articles'
                }
            ]
		},
    ]
}