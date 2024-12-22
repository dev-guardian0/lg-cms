// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/users'
import { Media } from './collections/media'
import {locales} from "@/types/locales";
import {Menus} from "@/collections/menus";
import {StaticText} from "@/collections/static-text";
import {Regions} from "@/collections/regions";
import {Cities} from "@/collections/cities";
import {Locations} from "@/collections/locations";
import {ProductCategories} from "@/collections/product-categories";
import {Pages} from "@/collections/pages";
import {ButcherShopCategories} from "@/collections/butcher-shop-categories";
import { s3Storage } from '@payloadcms/storage-s3'
import {Presets} from "@/collections/presets";
import {Careers} from "@/collections/careers";
import {Promotions} from "@/collections/promotions";
import {CareerApplications} from "@/collections/career-applications";

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
    Presets,
    Media,
    Menus,
    StaticText,
    Regions,
    Cities,
    Locations,
    ButcherShopCategories,
    ProductCategories,
    Careers,
    CareerApplications,
    Promotions,
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
