import {Block} from "payload";
import {Link} from "@/fields/Link";

export const SocialFeed: Block = {
	slug: 'social-feed',
	imageURL: '/img/blocks/instagram-feed.png',
	dbName: 'social_feed',
	labels: {
		singular: 'Social Feed',
		plural: 'Social Feeds',
	},
	fields: [
		{
			name: "basicInfo",
			type: 'group',
			fields: [
				{
					name: "line1",
					type: "text",
					required: true,
					localized: true,
				},
				{
					name: "line2",
					type: "text",
					required: true,
					localized: true,
				},
			]
		},
		Link(),
		{
			name: "images",
			type: "array",
			minRows: 4,
			fields: [
				{
					name: "image",
					type: "upload",
					relationTo: "media",
				},
			]
		},
	]
}