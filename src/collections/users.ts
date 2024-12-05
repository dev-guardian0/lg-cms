import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    group: 'Admin',
    useAsTitle: 'name',
    defaultColumns: ['name', 'email'],
  },
  auth: {
    tokenExpiration: 60 * 60 * 24 * 30, // 30 days
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: true,
}
