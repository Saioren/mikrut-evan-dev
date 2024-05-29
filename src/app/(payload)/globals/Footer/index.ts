import { GlobalConfig } from 'payload/types';
import { ImageLink } from '../../fields/ImageLink';

const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'linkBlock',
      type: 'group',
      label: 'Link Block',
      fields: [
        {
          name: 'linkBlockLabel',
          type: 'text',
        },
        {
          name: 'links',
          type: 'array',
          labels: {
            singular: 'Link',
            plural: 'Links',
          },
          fields: [
            ImageLink,
          ]
        },
      ],
    },
    {
      name: 'copyrightBlock',
      type: 'group',
      label: 'Copyright Block',
      fields: [
        {
          name: 'copyrightLabel',
          type: 'text',
        },
        {
          name: 'copyrightBody',
          type: 'textarea',
        },
        {
          name: 'linkText',
          type: 'text',
        },
        {
          name: 'copyrightLinks',
          type: 'array',
          labels: {
            plural: 'Copyright Links',
            singular: 'Copyright Link',
          },
          fields: [
            ImageLink,
          ],
        },
        
      ],
    },
  ],
};

export default Footer;
