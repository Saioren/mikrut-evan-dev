import { Field } from "payload/types";
import Content from "../../Content";
import Padding from "../../Padding";

const ProjectsHero: Field = {
    name: 'projectsHero',
    type: 'group',
    fields: [
        Padding,
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
            required: true,
        },
        Content,
    ]
}

export default ProjectsHero;