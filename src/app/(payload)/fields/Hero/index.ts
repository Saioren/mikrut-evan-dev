import { Field } from "payload/types";
import Content from "../../fields/Content";
import Padding from "../Padding";

const StandardHero: Field = {
    name: 'standardHero',
    type: 'group',
    fields: [
        Padding,
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