import { Field } from "payload/types";

const Padding: Field = {
    name: 'padding',
    label: 'Padding',
    type: 'select',
    options: [
        {
            label: 'Small',
            value: 'small',
        },
        {
            label: 'Medium',
            value: 'medium',
        },
        {
            label: 'Large',
            value: 'medium',
        },
    ]
}

export default Padding;