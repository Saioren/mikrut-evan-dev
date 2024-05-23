import { GlobalConfig } from 'payload/types';
import link from '../../fields/Link';

const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'linkBlock',
      label: 'Link Block',
      labels: {
        singular: 'Footer Item',
        plural: 'Footer Items',
      },
      type: 'array',
      fields: [
        {
          name: 'appearance',
          type: 'radio',
          defaultValue: 'secondary',
          options: [
            {
              label: 'Primary',
              value: 'primary',
            },
            {
              label: 'Secondary',
              value: 'secondary',
            },
            {
              label: 'Tertiary',
              value: 'tertiary',
            },
          ],
          admin: {
            layout: 'horizontal',
          },
        },
        {
          type: 'text',
          name: 'label',
          label: 'Label',
        },
        {
          type: 'checkbox',
          name: 'useLink',
          label: 'Use Link',
        },
        link({
          appearances: false,
        }),
      ],
    },
    {
      name: 'copyrightBlock',
      label: 'Copyright Block',
      type: 'array',
      labels: {
        singular: 'Footer Item',
        plural: 'Footer Items',
      },
      fields: [
        {
          name: 'appearance',
          type: 'radio',
          defaultValue: 'secondary',
          options: [
            {
              label: 'Secondary',
              value: 'secondary',
            },
            {
              label: 'Tertiary',
              value: 'tertiary',
            },
          ],
          admin: {
            layout: 'horizontal',
          },
        },
        {
          type: 'text',
          name: 'label',
          label: 'Label',
        },
        {
          type: 'checkbox',
          name: 'useLink',
          label: 'Use Link',
        },
        link({
          appearances: false,
        }),
      ],
    },
  ],
};

export default Footer;
