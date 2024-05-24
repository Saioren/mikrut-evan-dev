import StandardHero from "../../fields/Hero";
import CarouselBlock from "../../blocks/Carousel";
import EmailBlock from "../../blocks/Email";
import SkillsBlock from "../../blocks/Skills";
import TimelineBlock from "../../blocks/Timeline";
import { CollectionConfig } from "payload/types";
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
        TimelineBlock,
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
