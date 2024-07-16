import path from "path";
import { CollectionConfig } from "payload";

const Media: CollectionConfig = {
    slug: 'media',
    admin: {
        useAsTitle: 'filename',
        description: "Maximum upload file size: 12MB. Recommended file size for images is <500KB.",
    },
    upload: {
        staticDir: path.resolve(__dirname, '../../../../../media'),
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
