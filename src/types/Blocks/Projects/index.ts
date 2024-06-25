import { Link } from "@/types/Fields/Link/types";
import { Media } from "@/types/Fields/Media/types";
import { RichText } from "@/types/Fields/RichText/types";
import { PaddingOption } from "@/types/Layout/Padding/types";

export type Projects = {
    blockName?: string
    blockType?: 'projectsBlock'
    padding: PaddingOption
    id: string;
    firstProjects: {
            firstProjectsContent: {
                heading: 'string',
                content?: {
                    richText?: RichText;
                    links?: Link[];
                }
            },
            projectsField: Project[]
    },
    secondProjects: {
        secondProjectsContent: {
            heading: 'string',
            content?: {
                richText?: RichText;
                links?: Link[];
            }
        },
        projectsField: Project[]
},
thirdProjects: {
    thirdProjectsContent: {
        heading: 'string',
        content?: {
            richText?: RichText;
            links?: Link[];
        }
    },
    projectsField: Project[]
},
}

export type Project = {
        projectImageLight: Media
        projectImageDark: Media
        projectImage: Media
        projectName: string
        projectTeaser: string
        projectDescription: string
        projectUrl: string
        id: string
}