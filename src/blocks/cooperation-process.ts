import {Block} from "payload";

export const CooperationProcess: Block = {
    slug: 'cooperation-process',
    imageURL: '/img/blocks/cooperation-process.png',
    dbName: 'coop_processes',
    labels: {
		singular: 'Cooperation Process',
		plural: 'Cooperation Process',
	},
    fields: [
        {
            name: "header",
            type: "text",
            required: true,
            localized: true,
        },
        {
            name: "process",
            type: "array",
            required: true,
            fields: [
                {
                    name: "no",
                    type: "text",
                    required: true,
                    localized: true,
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
                }
            ]
        }
    ]
}