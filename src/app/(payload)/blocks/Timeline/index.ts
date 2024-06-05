import { Block } from "payload/types";
import Padding from "../../fields/Padding";

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