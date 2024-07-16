import path from 'path';
import fs from 'fs';
import { CollectionConfig } from "payload";

const mediaDir = path.resolve(process.env.MEDIA_DIR || '/tmp/media');

// Ensure the media directory exists
try {
    console.log(`Checking media directory: ${mediaDir}`);
    if (!fs.existsSync(mediaDir)) {
        fs.mkdirSync(mediaDir, { recursive: true });
        console.log(`Directory created: ${mediaDir}`);
    } else {
        console.log(`Directory already exists: ${mediaDir}`);
    }
} catch (error) {
    console.error(`Failed to create directory ${mediaDir}:`, error);
}

const Media: CollectionConfig = {
    slug: 'media',
    admin: {
        useAsTitle: 'filename',
        description: "Maximum upload file size: 12MB. Recommended file size for images is <500KB.",
    },
    upload: {
        staticDir: mediaDir,
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
    },
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
    },
    fields: [
        {
            name: 'alt',
            label: 'Alt Text',
            type: 'text',
            required: true,
        },
        {
            name: 'fallback',
            label: 'Fallback',
            type: 'relationship',
            relationTo: 'media',
            admin: {
                description: 'Select an image to use as a video fallback when browsers refuse to play them in iOS low-power mode',
            },
        },
    ],
};

export default Media;
