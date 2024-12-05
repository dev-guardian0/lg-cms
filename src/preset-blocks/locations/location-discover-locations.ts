import {Block} from "payload";
import {DiscoverLocations} from "@/blocks/discover-locations";

export const LocationDiscoverLocations: Block = {
	...DiscoverLocations,
	slug: 'loc-discover-locations',
	dbName: 'loc_discover_locs',
}