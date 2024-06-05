import { Field } from "payload/types";
import Content from "../../Content";
import Padding from "../../Padding";
import Position from "../../Position";

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
    ]
}

export default StandardHero;