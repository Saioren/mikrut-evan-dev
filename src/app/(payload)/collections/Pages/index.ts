import CarouselBlock from "../../blocks/Carousel";
import EmailBlock from "../../blocks/Email";
import SkillsBlock from "../../blocks/Skills";
import TimelineBlock from "../../blocks/Timeline";
import { CollectionConfig } from "payload";
import { slugField } from "../../fields/Slug";
import { Hero } from "../../fields/Heroes";
import ProjectsBlock from "../../blocks/Projects";

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
  versions: {
    drafts: true,
  },
  access: {
    // Permissive access rules
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    Hero,
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        CarouselBlock,
        EmailBlock,
        SkillsBlock,
        TimelineBlock,
        ProjectsBlock
      ],
    },
    slugField(),
    {
      name: 'author',
      relationTo: 'users',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'fullTitle',
      type: 'text',
      admin: {
        components: {
          Field: () => null,
        },
      },
    },
  ],
};

export default Pages;
