import { Field } from "payload/types";

export const Image: Field = {
    name: 'image',
    type: 'group',
    fields: [
        {
            name: 'mediaImage',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'alt',
            label: 'Alt Text',
            type: 'text',
            required: true,
        },
    ]
}