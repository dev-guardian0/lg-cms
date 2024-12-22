import {CollectionConfig} from 'payload'

import SlugField from "@/components/fields/slug-field";
import {blocks, presetsBlocks} from "@/blocks/blocks";
import {LocationHero} from "@/preset-blocks/locations/location-hero";
import {LocationInfo} from "@/preset-blocks/locations/location-info";
import {LocationMultiPanelCTA} from "@/preset-blocks/locations/location-multi-panel-cta";
import {LocationProductHighlights} from "@/preset-blocks/locations/location-product-highlights";
import {LocationSocialFeed} from "@/preset-blocks/locations/location-social-feed";
import {LocationAreas} from "@/preset-blocks/locations/location-areas";
import {LocationHighlight} from "@/preset-blocks/locations/location-highlight";
import {LocationTestimonials} from "@/preset-blocks/locations/location-testimonials";
import {LocationDiscoverLocations} from "@/preset-blocks/locations/location-discover-locations";
import {PromoList} from "@/blocks/promo-list";
import {CareersGrid} from "@/blocks/careers-grid";

export const Presets: CollectionConfig = {
	slug: 'presets',
	admin: {
		group: 'Content',
		useAsTitle: 'name',
		defaultColumns: ['name', 'slug', 'updatedAt'],
	},
	access: {
		read: () => true,
	},
	versions: {
		drafts: true
	},
	fields: [
		{
			type: 'tabs',
			tabs: [
				{
					label: "Preset Info",
					fields: [
						{
							type: 'row',
							fields: [
								{
									name: 'name',
									type: 'text',
									required: true,
									localized: false,
								},
								SlugField({name: 'slug', localized: false, required: true, targetField: 'name', label: 'Slug'}),
							]
						},
						{
							name: 'description',
							type: 'textarea',
							required: false,
							localized: false,
						},
					]
				},
				{
					label: "Content",
					fields: [
						{
							name: 'style',
							label: "Page Style",
							type: 'select',
							defaultValue: 'default',
							options: [
								{label: 'Default', value: 'default'},
								{label: 'Dark', value: 'dark'},
							],
						},
						{
							name: 'content',
							type: 'blocks',
							required: true,
							blocks: presetsBlocks
						},
					]
				},
			]
		},
	],
	timestamps: true,
}
