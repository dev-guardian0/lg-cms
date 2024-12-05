import {Block} from "payload";
import {SocialFeed} from "@/blocks/social-feed";
import {ProductHighlights} from "@/blocks/product-highlights";

export const LocationProductHighlights: Block = {
	...ProductHighlights,
	slug: 'loc-product-highlights',
	dbName: 'loc_product_highlights',
}