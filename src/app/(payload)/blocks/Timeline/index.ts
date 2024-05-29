import { Block } from "payload/types";

const TimelineBlock: Block = {
    slug: 'timelineBlock',
    labels: {
        plural: 'Timelines',
        singular: 'Timeline',
    },
    fields: [
        {
            name: 'header',
            type: 'text',
        },
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
                                name: 'description',
                                label: 'Description',
                                type: 'textarea',
                                admin: {
                                    width: "50%",
                                },
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