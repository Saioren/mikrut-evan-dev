import { Carousel } from "./Carousel/types"
import { Email } from "./Email/types"
import { Projects } from "./Projects"
import { Skills } from "./Skills/types"
import { Timeline } from "./Timeline/types"

export type BlockTypes = 'skillsBlock' | 'carouselBlock' | 'timelineBlock' | 'emailBlock' | 'projectsBlock'

export type Block = BaseBlock & (
    Skills |
    Carousel |
    Timeline |
    Email |
    Projects
)

export interface BaseBlock {
    blockName: string;
    blockType: BlockTypes
}

export type Blocks = Block[]