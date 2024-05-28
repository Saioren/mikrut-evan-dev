import { Field } from 'payload/types';
import StandardHero from './StandardHero';

export const Hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      label: 'Hero Type',
      type: 'select',
      required: true,
      defaultValue: 'standard',
      options: [
        {
          label: 'Standard',
          value: 'standard',
        },
        // Add more hero types here as needed
      ],
    },
    {
      name: 'standard',
      type: 'group',
      admin: {
        condition: (_, { type }) => type === 'standard',
      },
      fields: [
        StandardHero,
      ]
    },
    // Add more hero type groups here as needed
  ],
};

export default Hero;
