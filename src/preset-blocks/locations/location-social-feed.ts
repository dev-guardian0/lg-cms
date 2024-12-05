import {Block} from "payload";
import {SocialFeed} from "@/blocks/social-feed";

export const LocationSocialFeed: Block = {
	...SocialFeed,
	slug: 'loc-social-feed',
	dbName: 'loc_social_feed',
}