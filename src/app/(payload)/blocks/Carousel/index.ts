import { Block } from "payload/types";
import Content from "../../fields/Content";
import Padding from "../../fields/Padding";
import Position from "../../fields/Position";

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
                    name: 'alt',
                    label: 'Alt Text',
                    type: 'text',
                    required: true,
                },
            ],
        },
    ]
}

export default CarouselBlock;