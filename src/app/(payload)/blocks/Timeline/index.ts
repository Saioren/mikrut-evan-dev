import { Block } from "payload/types";
import Padding from "../../fields/Padding";
import Content from "../../fields/Content";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

const TimelineBlock: Block = {
    slug: 'timelineBlock',
    labels: {
        plural: 'Timelines',
        singular: 'Timeline',
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
        },
        Padding,
        Content,
        {
            name: 'timelineElements',
            type: 'array',
            label: 'Timeline Elements',
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            label: "Title",
                            admin: {
                                width: "50%",
                            },
                        },
                        {   
                            name: 'richText',
                            type: 'richText',
                            editor: lexicalEditor({}),
                        },
                    ],
                },
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'date',
                            type: 'date',
                            admin: {
                                width: "50%",
                            },
                        },
                        
                        {
                            name: 'icon',
                            type: 'upload',
                            relationTo: 'media',
                            required: true,
                            admin: {
                                width: "50%",
                            },
                        },
                    ],  
                }
                
            ]
        }
    ]
}

export default TimelineBlock;