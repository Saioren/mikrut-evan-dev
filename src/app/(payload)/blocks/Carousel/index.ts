import { Block } from "payload/types";
import Content from "../../fields/Content";
import Padding from "../../fields/Padding";

const CarouselBlock: Block = {
    slug: 'carouselBlock',
    labels: {
        plural: 'Carousels',
        singular: 'Carousel',
    },
    fields: [
        Padding,
        Content,
        {
            name: 'slides',
            label: 'Slides',
            type: 'array',
            minRows: 2,
            fields: [
                {
                    name: 'media',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
    ]
}

export default CarouselBlock;