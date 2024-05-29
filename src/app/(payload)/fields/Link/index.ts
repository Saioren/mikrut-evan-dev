import { Field } from "payload/types";
import { deepMerge } from "payload/utilities";
import { LinkAppearances } from "@/types/Fields/Link/types";

export const appearanceOptions = {
  primary: {
    label: 'Primary',
    value: 'primary',
  },
  secondary: {
    label: 'Secondary',
    value: 'secondary',
  },
  tertiary: {
    label: 'Tertiary',
    value: 'tertiary',
  },
};

type LinkType = (
  options?: {
    appearances?: LinkAppearances[] | false
    overrides?: Partial<Field>
  }
) => Field;

const Link: LinkType = ({
  appearances, 
  overrides,
} = {}) => {
  const generatedLink: Field = {
    name: 'link',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
     {
      type: 'row',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
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
    ],
  };

  if (appearances) {
    generatedLink.fields.unshift({
      name: 'appearance',
      type: 'select',
      defaultValue: appearances[0],
      options: appearances.map((appearance) => appearanceOptions[appearance]),
    });
  }

  return deepMerge(generatedLink, overrides);
};

export default Link;
