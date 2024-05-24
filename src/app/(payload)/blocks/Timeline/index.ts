import { Block } from "payload/types";

const TimelineBlock: Block = {
    slug: 'timeline',
    labels: {
        plural: 'Timelines',
        singular: 'Timeline',
    },
    fields: [
        {
            name: 'timelineElement',
            type: 'array',
            label: 'Timeline Element',
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'timelineElementTitle',
                            type: 'text',
                            label: "Timeline Element Title",
                            admin: {
                                width: "50%",
                            },
                        },
                            {
                                name: 'timelineElementDescription',
                                label: 'Timeline Element Description',
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
                            name: 'timelineElementDate',
                            type: 'date',
                            admin: {
                                width: "50%",
                            },
                        },
                        
                        {
                            name: 'timelineElementIcon',
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