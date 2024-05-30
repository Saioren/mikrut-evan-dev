import { Field } from "payload/types";

const Padding: Field = {
    name: 'padding',
    label: 'Padding',
    type: 'group',
   fields: [
    {
        name: 'paddingTop',
        label: 'Padding Above',
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
    },
    {
        name: 'paddingBottom',
        label: 'Padding Below',
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
    },
]   
}

export default Padding;