import { Carousel } from "./Carousel/types"
import { Email } from "./Email/types"
import { Skills } from "./Skills/types"
import { Timeline } from "./Timeline/types"

export type BlockTypes = 'skillsBlock' | 'carouselBlock'

export type Block = (
    Skills |
    Carousel |
    Timeline |
    Email
)

export type Blocks = Block[]