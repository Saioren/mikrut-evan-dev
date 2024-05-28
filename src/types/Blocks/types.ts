import { Carousel } from "./Carousel/types"
import { Skills } from "./Skills/types"


export type BlockTypes = 'skillsBlock' | 'carouselBlock'

export type Block = (
    Skills |
    Carousel
)

export type Blocks = Block[]