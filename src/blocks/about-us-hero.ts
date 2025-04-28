import { Block } from "payload";

export const AboutUsHero: Block = {
    slug: 'about-us-hero',
    imageURL: '/img/blocks/about-us-hero.png',
    dbName: 'about_us_heroes',
    labels: {
		singular: 'About Us Hero',
		plural: 'About Us Heroes',
	},
    fields: [
        {
            name: "title",
            type: "textarea",
            required: true,
            localized: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            localized: false,
        },
        {
            name: "paragraph",
            type: "textarea",
            required: true,
            localized: true,
        }
    ]
}