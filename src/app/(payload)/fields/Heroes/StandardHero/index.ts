import { Field } from "payload";
import Content from "../../Content";
import Padding from "../../Padding";
import Position from "../../Position";
import BackgroundColors from "../../BackgroundColors";

const StandardHero: Field = {
  name: 'standardHero',
  type: 'group',
  fields: [
    Padding,
    Position,
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
    },
    Content,
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'enableBackgroundColors',
      label: 'Enable Background Colors',
      type: 'checkbox',
    },
    {
      name: 'backgroundColors',
      type: 'group',
      admin: {
        condition: (_, { checkbox }) => checkbox === true,
      },
      fields: [
        BackgroundColors,
      ]
    },
  ]
}

export default StandardHero;