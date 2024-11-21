// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import {locales} from "@/types/locales";
import {Menus} from "@/collections/Menus";
import {StaticText} from "@/collections/StaticText";
import {Regions} from "@/collections/Regions";
import {Cities} from "@/collections/Cities";
import {Locations} from "@/collections/Locations";
import {ProductCategories} from "@/collections/ProductCategories";
import {Pages} from "@/collections/Pages";
import {ButcherShopCategories} from "@/collections/ButcherShopCategories";
import { s3Storage } from '@payloadcms/storage-s3'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Pages,
    Media,
    Menus,
    StaticText,
    Regions,
    Cities,
    Locations,
    ButcherShopCategories,
    ProductCategories,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  localization: {
    locales: locales.map(l => l.value), // required
    defaultLocale: 'en', // required
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        endpoint: process.env.S3_URL!,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY!,
          secretAccessKey: process.env.S3_SECRET_KEY!,
        },
        region: process.env.S3_REGION!,
        forcePathStyle: true,
        // ... Other S3 configuration
      },
    }),
  ],
})
