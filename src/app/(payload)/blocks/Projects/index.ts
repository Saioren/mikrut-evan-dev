import { Block } from "payload";
import Padding from "../../fields/Padding";
import { ProjectsField } from "../../fields/Projects";
import Content from "../../fields/Content";


const ProjectsBlock: Block = {
    slug: 'projectsBlock',
    labels: {
        singular: 'Projects Block',
        plural: 'Projects Blocks',
    },
    fields: [
        Padding,
        {
            name: 'firstProjects',
            type: 'group',
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
                ProjectsField
            ]
        },
        {
            name: 'secondProjects',
            type: 'group',
            fields: [
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
                ProjectsField
            ]
        },
        {
            name: 'thirdProjects',
            type: 'group',
            fields: [
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
                ProjectsField
            ]
        },
    ]
}

export default ProjectsBlock