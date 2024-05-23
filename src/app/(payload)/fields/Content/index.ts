import { Field } from "payload/types";
import link from '../Link'

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
            label: 'Rich Text',
            type: 'richText',
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