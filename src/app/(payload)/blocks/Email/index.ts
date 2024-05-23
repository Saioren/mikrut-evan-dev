import { Block } from "payload/types";
import Content from "../../fields/Content";
import Position from "../../fields/Position";
import Padding from "../../fields/Padding";

const EmailBlock: Block = {
    slug: 'emailBlock',
    labels: {
        plural: 'Email Blocks',
        singular: 'Email Block',
    },
    fields: [
        Padding,
        Content,
        Position,
    ]
}

export default EmailBlock;