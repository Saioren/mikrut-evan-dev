import { Field } from 'payload';

const positionOptions = [
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' },
  { label: 'Top Left', value: 'topLeft' },
  { label: 'Top Right', value: 'topRight' },
  { label: 'Center', value: 'center' },
  { label: 'Center Left', value: 'centerLeft' },
  { label: 'Center Right', value: 'centerRight' },
  { label: 'Bottom Left', value: 'bottomLeft' },
  { label: 'Bottom Right', value: 'bottomRight' },
];

const BackgroundColors: Field = {
  name: 'backgroundColors',
  type: 'array',
  fields: [
    {
      name: 'backgroundColor',
      type: 'select',
      options: positionOptions,
      required: true,
      admin: {
        description: 'Select the position for the background color',
      },
    },
  ],
};

export default BackgroundColors;
