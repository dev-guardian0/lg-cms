import {Hero, PresetHero} from "@/blocks/hero";
import {MultiPanelCTA, PresetMultiPanelCTA} from "@/blocks/multi-panel-cta";
import {ButcherShopPromo, PresetButcherShopPromo} from "@/blocks/butcher-shop-promo";
import {PresetProductHighlights, ProductHighlights} from "@/blocks/product-highlights";
import {PresetSocialFeed, SocialFeed} from "@/blocks/social-feed";
import {PresetRegionSelectHeader, RegionSelectHeader} from "@/blocks/region-select-header";
import {LocationsGrid, PresetLocationsGrid} from "@/blocks/locations-grid";
import {CitiesFilter, PresetCitiesFilter} from "@/blocks/cities-filter";
import {DiscoverLocations, PresetDiscoverLocations} from "@/blocks/discover-locations";
import {PresetTestimonials, Testimonials} from "@/blocks/testimonials";
import {PageHeader, PresetPageHeader} from "@/blocks/page-header";
import {PresetTextAndImage, TextAndImage} from "@/blocks/text-and-image";
import {EventRoomSelector, PresetEventRoomSelector} from "@/blocks/event-room-selector";
import {ContactRequestForm, PresetContactRequestForm} from "@/blocks/contact-request-form";
import {PresetPromoList, PromoList} from "@/blocks/promo-list";
import {CareersGrid, PresetCareersGrid} from "@/blocks/careers-grid";
import {Block} from "payload";
import {LocationHero} from "@/preset-blocks/locations/location-hero";
import {LocationInfo} from "@/preset-blocks/locations/location-info";
import {LocationAreas} from "@/preset-blocks/locations/location-areas";
import {LocationHighlight} from "@/preset-blocks/locations/location-highlight";
import {CareerDetails} from "@/blocks/career-details";
import {Carousel, PresetCarousel} from "@/blocks/carousel";
import {PresetSpecials, Specials} from "@/blocks/specials";
import {CTA, PresetCTA} from "@/blocks/cta";
import {ProductDetails} from "@/preset-blocks/store/product-details";
import {PresetShop} from "@/blocks/shop";
import {PresetVouchers, Vouchers} from "@/blocks/vouchers";
import {AboutUsHero} from "@/blocks/about-us-hero";
import {FoundersCollage} from "@/blocks/founders-collage";
import {OurStories} from "@/blocks/our-stories";
import {GauchoWay} from "@/blocks/gaucho-way";

export const blocks = [
	Hero,
	MultiPanelCTA,
	ButcherShopPromo,
	ProductHighlights,
	SocialFeed,
	RegionSelectHeader,
	LocationsGrid,
	CitiesFilter,
	DiscoverLocations,
	Testimonials,
	PageHeader,
	TextAndImage,
	EventRoomSelector,
	ContactRequestForm,
	PromoList,
	CareersGrid,
	Carousel,
	Specials,
	CTA,
	Vouchers,
	AboutUsHero,
	FoundersCollage,
	OurStories,
	GauchoWay
];

export const presetsBlocks: Block[] = [
	ProductDetails,
	LocationHero,
	LocationInfo,
	LocationAreas,
	LocationHighlight,
	CareerDetails,
	PresetHero,
	PresetMultiPanelCTA,
	PresetButcherShopPromo,
	PresetProductHighlights,
	PresetSocialFeed,
	PresetRegionSelectHeader,
	PresetLocationsGrid,
	PresetCitiesFilter,
	PresetDiscoverLocations,
	PresetTestimonials,
	PresetPageHeader,
	PresetTextAndImage,
	PresetEventRoomSelector,
	PresetContactRequestForm,
	PresetPromoList,
	PresetCareersGrid,
	PresetCarousel,
	PresetSpecials,
	PresetCTA,
	PresetShop,
	PresetVouchers,
];