import {CollectionPropsFragment} from "@/graphql/collection-props";

export const CollectionBySlugQuery = `
${CollectionPropsFragment}
query($slug:String!) {
	collection(slug:$slug) {
		...CollectionPropsFragment
		children {
				...CollectionPropsFragment
				children {
						...CollectionPropsFragment
						children {
								...CollectionPropsFragment
						}
				}
		}
	}
}`;