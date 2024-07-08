import { Field } from "payload";

export const ImageLink: Field = {
  name: 'imageLink',
  type: 'group',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'reference',
          label: 'Document to link to',
          type: 'relationship',
          relationTo: ['pages'],
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'reference',
            width: '50%',
          },
        },
      ],
    },
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
          },
        },
        {
          name: 'newTab',
          label: 'Open In New Tab',
          type: 'checkbox',
        },
        {
          name: 'url',
          label: 'Custom URL',
          type: 'text',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'custom',
          },
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ]
}