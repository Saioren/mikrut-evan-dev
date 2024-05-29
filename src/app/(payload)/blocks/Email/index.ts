import { Block } from "payload/types";
import Position from "../../fields/Position";
import Padding from "../../fields/Padding";

const EmailBlock: Block = {
    slug: 'emailBlock',
    labels: {
        plural: 'Email Blocks',
        singular: 'Email Block',
    },
    fields: [
        {
            name: 'header',
            type: 'text',
        },
        Padding,
        Position,
    ]
}

export default EmailBlock;