import {Field} from "payload";

export default function SlugField({name, localized, required, targetField, label} : {name: string, localized: boolean, required: boolean, targetField: string, label?:string }):Field {
	return {
		type: 'row',
		fields: [
			{
				type: 'text',
				name,
				localized,
				required,
				label,
				index: true,
				admin: {
					components: {
						Field: {
							path: '@/components/fields/slug',
							clientProps: {
								targetField,
							}
						}
					}
				}
			},
			{
				type: 'checkbox',
				name: name + '_auto_slug',
				label: 'Auto Generate Slug',
				required: false,
				defaultValue: true,
				localized: false,
			},
		]
	}
}