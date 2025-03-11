import type { CollectionConfig } from 'payload'
import path from "node:path";

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'Content',
  },
  upload: {
    disableLocalStorage: true,
    crop: true,
    focalPoint: true,
    mimeTypes: ['image/jpeg', 'image/png', 'image/avif', 'image/webp', 'image/svg+xml'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'vendure_id',
      type: 'text',
    },
  ],
  hooks: {
    beforeOperation: [
      async (req) => {
        if (req.operation === 'create' && req.req.file) {
          const parsed = path.parse(req.req.file.name);

          const newfilename = path.join(parsed.dir, `${parsed.name}-${Date.now()}${parsed.ext}`);
          req.req.file.name = newfilename;
          // console.log('beforeOperation filename', req.req.file.name, newfilename);
        }
      }
    ]
  }
}
