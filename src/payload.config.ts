import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import { s3Storage } from '@payloadcms/storage-s3';
import * as AWS from '@aws-sdk/client-s3';

import Users from './app/(payload)/collections/Users/index';
import Media from './app/(payload)/collections/Media/index';
import Pages from './app/(payload)/collections/Pages';
import SkillsCollection from './app/(payload)/collections/Skills';
import Footer from './app/(payload)/globals/Footer';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const databaseUri = process.env.DATABASE_URI;

if (!databaseUri) {
  throw new Error('DATABASE_URI is not defined in the environment variables');
}

if (!process.env.S3_ACCESS_KEY || !process.env.S3_SECRET_KEY) {
  throw new Error('S3_ACCESS_KEY or S3_SECRET_KEY is not defined in the environment variables');
}

const s3Config = {
  region: 'nyc3',
  endpoint: 'https://nyc3.digitaloceanspaces.com',
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
  },
  sslEnabled: true,
  forcePathStyle: false,
};

const s3StoragePlugin = s3Storage({
  bucket: process.env.S3_BUCKET || '',
  config: s3Config,
  collections: {
    media: {
      disableLocalStorage: true,
    },
  },
});

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  plugins: [
    s3StoragePlugin,
  ],
  collections: [Users, Media, Pages, SkillsCollection],
  globals: [Footer],
  csrf: [
    process.env.NEXT_PUBLIC_APP_URL || '',
    'https://mikrutevandev-git-main-evan-mikruts-projects.vercel.app/',
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: databaseUri,
  }),
});
