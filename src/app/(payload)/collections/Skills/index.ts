import { CollectionConfig } from "payload/types";
import { SkillField } from "../../fields/Skill";

const SkillsCollection: CollectionConfig = {
    slug: 'skillsCollection',
    labels: {
        plural: 'Skills',
        singular: 'Skills',
    },
    fields: [
        SkillField,
    ]
}

export default SkillsCollection;