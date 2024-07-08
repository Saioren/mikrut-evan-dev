import { Field } from "payload";
import link from '../Link'
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { ImageLink } from "../ImageLink";

type Args = {
    name?: string,
    hideGutter?: boolean,
    condition?: (data: any, sibling: any) => boolean,
}

const Content: Field = {
    name: 'content',
    type: 'group',
    label: {
        singular: 'Content',
        plural: 'Content',
    },
    admin: {
        hideGutter: true,
    },
    fields: [
        {
            name: 'richText',
            type: 'richText',
            editor: lexicalEditor({}),
        },
        {
            name: 'links',
            label: 'Links',
            type: 'array',
            fields: [
                link(),
            ]
        },
        {
            name: 'imageLinks',
            label: 'Icon Links',
            type: 'array',
            fields: [
                ImageLink,
            ]
        }
    ]
}

export default Content;