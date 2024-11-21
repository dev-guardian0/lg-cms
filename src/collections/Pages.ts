import {CollectionConfig} from 'payload'

import {Hero} from "@/blocks/Hero";
import {MultiPanelCTA} from "@/blocks/MultiPanelCTA";
import {ButcherShopPromo} from "@/blocks/ButcherShopPromo";
import {ProductHighlights} from "@/blocks/ProductHighlights";
import {SocialFeed} from "@/blocks/SocialFeed";
import SlugField from "@/components/fields/slug-field";

export const Pages: CollectionConfig = {
	slug: 'pages',
	admin: {
		group: 'Content',
		useAsTitle: 'title',
		defaultColumns: ['title', 'slug', 'updatedAt'],
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
					label: "Page Info",
					fields: [
						{
							type: 'row',
							fields: [
								{
									name: 'title',
									type: 'text',
									required: true,
									localized: true,
								},
								SlugField({name: 'slug', localized: true, required: true, targetField: 'title', label: 'Slug'}),
							]
						},

						{
							name: 'description',
							type: 'textarea',
							required: false,
							localized: true,
						},
					]
				},
				{
					label: "Content",
					fields: [
						{
							name: 'content',
							type: 'blocks',
							required: true,
							blocks: [Hero, MultiPanelCTA, ButcherShopPromo, ProductHighlights, SocialFeed],
						},
					]
				},
			]
		},
	],
	timestamps: true,
}
