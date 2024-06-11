import { Block } from "payload/types";
import Position from "../../fields/Position";
import Padding from "../../fields/Padding";
import Content from "../../fields/Content";

const EmailBlock: Block = {
    slug: 'emailBlock',
    labels: {
        plural: 'Email Blocks',
        singular: 'Email Block',
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
        },
        Padding,
        Position,
        Content,
    ]
}

export default EmailBlock;