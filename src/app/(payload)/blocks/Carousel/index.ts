import { Block } from "payload/types";
import Content from "../../fields/Content";
import Padding from "../../fields/Padding";
import Position from "../../fields/Position";
import Link from "../../fields/Link";

const CarouselBlock: Block = {
    slug: 'carouselBlock',
    labels: {
        plural: 'Carousels',
        singular: 'Carousel',
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
        },
        Padding,
        Position,
        Content,
        {
            name: 'slides',
            label: 'Slides',
            type: 'array',
            minRows: 2,
            fields: [
                {
                    name: 'projectImage',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                    admin: {
                        condition: (_, siblingData) => siblingData.imageType === false
                    }
                },
                {
                    name: 'projectImageDark',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                    admin: {
                        condition: (_, siblingData) => siblingData.imageType === true
                    }
                },
                {
                    name: 'projectImageLight',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                    admin: {
                        condition: (_, siblingData) => siblingData.imageType === true
                    }
                },
                {
                    name: 'imageType',
                    type: 'checkbox',
                    label: 'Dynamic Image',
                    defaultValue: false,
                },
                {
                    name: 'slideTitle',
                    type: 'text',
                },
                {
                    name: 'slideDescription',
                    type: 'textarea',
                },
                {
                    name: 'slideUrl',
                    type: 'text',
                }
            ],
        },
    ]
}

export default CarouselBlock;