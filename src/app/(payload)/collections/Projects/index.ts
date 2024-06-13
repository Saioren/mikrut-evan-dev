import { CollectionConfig } from "payload/types";
import Link from "../../fields/Link";
import { ProjectsField } from "../../fields/Projects";
import Content from "../../fields/Content";


const Projects: CollectionConfig = {
    slug: 'projects',
    labels: {
        plural: 'Projects',
        singular: 'Project',
    },
    fields: [
        {
            name: 'firstProjectsContent',
            type: 'group',
            fields: [
                {
                    name: 'heading',
                    type: 'text',
                },
                Content,
            ]
        },
        {
            name: 'firstProjects',
            type: 'array',
            fields: [
                ProjectsField
            ]
        },
        {
            name: 'secondProjectsContent',
            type: 'group',
            fields: [
                {
                    name: 'heading',
                    type: 'text',
                },
                Content,
            ]
        },
        {
            name: 'secondProjects',
            type: 'array',
            fields: [
                ProjectsField
            ]
        },
        {
            name: 'thirdProjectsContent',
            type: 'group',
            fields: [
                {
                    name: 'heading',
                    type: 'text',
                },
                Content,
            ]
        },
        {
            name: 'thirdProjects',
            type: 'array',
            fields: [
                ProjectsField
            ]
        },
    ]
}

export default Projects;