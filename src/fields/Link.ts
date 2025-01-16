import type { Field } from 'payload'

import deepMerge from '../utilities/deep-merge'

type LinkType = (options?: {
	hasAppearances?: boolean
  disableLabel?: boolean
  overrides?: Record<string, unknown>
  required?: boolean
}) => Field

export const Link: LinkType = ({hasAppearances = false, disableLabel = false, overrides = {}, required = true } = {}) => {
  const linkResult: Field = {
    name: 'link',
    type: 'group',
    admin: {
      hideGutter: false,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            options: [
              {
                label: 'Internal link',
                value: 'reference',
              },
              {
                label: 'Custom URL',
                value: 'custom',
              },
            ],
            defaultValue: 'reference',
            admin: {
              layout: 'horizontal',
              width: '33%',
            },
          },
          {
            name: 'newTab',
            label: 'Open in new tab',
            type: 'checkbox',
            admin: {
              width: '33%',
              style: {
                alignSelf: 'flex-end',
              },
            },
          },
          {
            name: 'icon',
            type: 'select',
            defaultValue: undefined,
            options: [
              {label: 'Email', value: 'email'},
              {label: 'Phone', value: 'phone'},
              {label: 'Facebook', value: 'facebook'},
              {label: 'Instagram', value: 'instagram'},
              {label: 'WhatsApp', value: 'whatsapp'},
              {label: 'Zalo', value: 'zalo'},
              {label: 'Account', value: 'account'},
              {label: 'Reservations', value: 'reservations'},
              {label: 'Orders', value: 'orders'},
              {label: 'Vouchers', value: 'vouchers'},
              {label: 'Billing', value: 'billing'},
              {label: 'Notifications', value: 'notifications'},
              {label: 'Addresses', value: 'addresses'},
              {label: 'Invoices', value: 'invoices'},
            ],
            admin: {
              width: '33%',
              style: {
                // alignSelf: 'flex-end',
              },
            },
          }
        ],
      },
    ],
  }

  const linkTypes: Field[] = [
    {
      name: 'reference',
      label: 'Document to link to',
      type: 'relationship',
      relationTo: ['pages'],
      required,
      maxDepth: 1,
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'reference',
      },
    },
    {
      name: 'url',
      label: 'Custom URL',
      type: 'text',
      required,
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom',
      },
    },
  ]

  if (!disableLabel) {
    linkTypes.map(linkType => ({
      ...linkType,
      admin: {
        ...linkType.admin,
        width: '50%',
      },
    }))

    linkResult.fields.push({
      type: 'row',
      fields: [
        ...linkTypes,
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required,
          admin: {
            width: '50%',
          },
        },
      ],
    })
  } else {
    linkResult.fields = [...linkResult.fields, ...linkTypes]
  }

	if (hasAppearances) {
		linkResult.fields.unshift({
			enumName: ({tableName}) => 'link_appearance',
			name: 'appearance',
			type: 'select',
			defaultValue: 'primary',
			options: [
				{label: 'Primary', value: 'primary'},
				{label: 'Highlight', value: 'highlight'},
			],
		});
	}

  return deepMerge(linkResult, overrides)
}