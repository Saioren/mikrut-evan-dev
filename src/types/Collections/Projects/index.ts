import { Link } from "@/types/Fields/Link/types";
import { Media } from "@/types/Fields/Media/types";
import { RichText } from "@/types/Fields/RichText/types";

export type ProjectCollection = {
    id: string;
    firstProjectsContent: {
        heading: 'string',
        content?: {
            richText?: RichText;
            links?: Link[];
        }
    }
    secondProjectsContent: {
        heading: 'string',
        content?: {
            richText?: RichText;
            links?: Link[];
        }
    }
    thirdProjectsContent: {
        heading: 'string',
        content?: {
            richText?: RichText;
            links?: Link[];
        }
    }
    firstProjects: Project[];
    secondProjects: Project[];
    thirdProjects: Project[];
}

export type Project = {
    projectsField: {
        projectImage: Media
        projectName: string
        projectTeaser: string
        projectDescription: string
        projectUrl: string
    }
    id: string
}