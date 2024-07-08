import { Field } from "payload";

const Position: Field = {
    name: 'position',
    label: 'Position',
    type: 'radio',
    options: [
        {
            label: 'Content on left',
            value: 'left',
        },
        {
            label: 'Content on right',
            value: 'right',
        },
    ]
}

export default Position;