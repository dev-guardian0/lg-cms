import {Block} from "payload";

export const ContactRequestForm: Block = {
	slug: 'contact-request-form',
	imageURL: '/img/blocks/contact-request-form.png',
	dbName: 'contact_request_form',
	labels: {
		singular: 'Contact Request Form',
		plural: 'Contact Request Forms',
	},
	fields: [
		{
			name: "title",
			type: "textarea",
			required: true,
			localized: true,
		},
		{
			name: "text",
			type: "textarea",
			required: true,
			localized: true,
		},
		{
			type: 'row',
			fields: [
				{
					name: "type",
					type: "select",
					options: [
						{label: 'Catering', value: 'catering'},
					],
				},
				{
					name: "targetEmail",
					type: "text",
					required: true,
					localized: false,
				},

			]
		},
	]
}

export const PresetContactRequestForm: Block = {
	...ContactRequestForm,
	slug: 'preset-contact-request-form',
	dbName: 'preset_contact_form',
}