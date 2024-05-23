import { CollectionConfig } from "payload/types";
import StandardHero from "../../fields/Hero";
import CarouselBlock from "../../blocks/Carousel";
import EmailBlock from "../../blocks/Email";
import SkillsBlock from "../../blocks/Skills";
import { slugField } from "../../fields/Slug";

const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
        defaultColumns: [
            'fullTitle',
            'author',
            'createdAt',
            'appUrl',
        ],
    },
    fields: [
        {
            name: 'title',
            label: 'Page Title',
            type: 'text',
            required: true,
        },
        StandardHero,
        {
            name: 'layout',
            label: 'Page Layout',
            type: 'blocks',
            minRows: 1,
            blocks: [
                CarouselBlock,
                EmailBlock,
                SkillsBlock,
            ]
        },
        slugField(),
    ]
}

export default Pages;