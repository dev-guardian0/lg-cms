import {Block} from "payload";
import {Testimonials} from "@/blocks/testimonials";

export const LocationTestimonials: Block = {
	...Testimonials,
	slug: 'loc-testimonials',
	dbName: 'loc_testimonials',
}