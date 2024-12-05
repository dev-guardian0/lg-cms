import type { CollectionConfig } from 'payload'

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
}
