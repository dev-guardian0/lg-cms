import {Block} from "payload";

export const ContactUs: Block = {
    slug: 'contact-us',
    imageURL: '/img/blocks/contact-us.png',
    dbName: 'contact_us',
    labels: {
        singular: 'Contact Us',
        plural: 'Contact Us',
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
            localized: true,
        },
        {
            name: "url",
            type: "text",
            required: true,
        },
    ]
}