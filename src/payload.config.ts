import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';

import Users from './app/(payload)/collections/Users/index';
import Media from './app/(payload)/collections/Media/index';
import Pages from './app/(payload)/collections/Pages';
import SkillsCollection from './app/(payload)/collections/Skills';
import Footer from './app/(payload)/globals/Footer';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Pages, SkillsCollection],
  globals: [Footer],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGO_URL || '',
  }),
});