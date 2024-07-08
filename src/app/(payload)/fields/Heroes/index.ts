import { Field } from 'payload';
import StandardHero from './StandardHero';
import ProjectsHero from './ProjectsHero';

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
        {
          label: 'Projects',
          value: 'projects',
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
    {
      name: 'projects',
      type: 'group',
      admin: {
        condition: (_, { type }) => type === 'projects',
      },
      fields: [
        ProjectsHero,
      ]
    },
    // Add more hero type groups here as needed
  ],
};

export default Hero;
