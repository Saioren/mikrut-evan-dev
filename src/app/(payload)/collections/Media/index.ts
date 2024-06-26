import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
    slug: 'media',
    admin: {
        useAsTitle: 'filename',
        description: "Maximum upload file size: 12MB. Recommended file size for images is <500KB.",
    },
    upload: {
        staticDir: 'media',
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*'],
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
