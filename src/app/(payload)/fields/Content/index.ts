import { Field } from "payload/types";
import link from '../Link'
import { lexicalEditor } from "@payloadcms/richtext-lexical";

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
        }

    ]
}

export default Content;