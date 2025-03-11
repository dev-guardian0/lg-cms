// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { NodeHttpHandler } from '@smithy/node-http-handler'

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
import {StaffGuidebookCategories} from "@/collections/staff-guidebook-categories";
import {nestedDocsPlugin} from "@payloadcms/plugin-nested-docs";
import {StaffGuidebookPage} from "@/collections/staff-guidebook-page";
import {bigint, bigserial, index, integer, jsonb, pgTable, serial, text, timestamp} from "@payloadcms/db-postgres/drizzle/pg-core";

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
    StaffGuidebookCategories,
    StaffGuidebookPage,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  localization: {
    locales: locales.map(l => { return { label: l.label, code: l.value } }), // required
    defaultLocale: 'en', // required
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    beforeSchemaInit: [
      ({ schema, adapter }) => {
        return {
          ...schema,
          tables: {
            ...schema.tables,
            staffAppData: pgTable('staff_app_data', {
              id: bigint({ mode: 'number' }).primaryKey().generatedAlwaysAsIdentity(),
              category: text().notNull(),
              flags: integer().notNull().default(0),
              key: text(),
              assoc_key: text(),
              data: jsonb(),
              date_created: timestamp({ withTimezone: true }).notNull().defaultNow(),
              date_updated: timestamp({ withTimezone: true }).notNull().defaultNow(),
            }),
          },
        }
      },
    ],
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    nestedDocsPlugin({
      collections: ['staff-guidebook-categories'],
      generateLabel: (_, doc) => doc.category as string,
      generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    }),
    s3Storage({
      collections: {
        media: {
          disableLocalStorage: true,
        },
      },
      bucket: process.env.S3_BUCKET!,
      config: {
        requestHandler: new NodeHttpHandler({
          httpAgent: {
            maxSockets: 300, // default 50
          },
          httpsAgent: {
            maxSockets: 300, // default 50
          },

          // time limit (ms) for receiving response.
          requestTimeout: 5_000,

          // time limit (ms) for establishing connection.
          connectionTimeout: 5_000,
        }),
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
