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
                    name: 'slide',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
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