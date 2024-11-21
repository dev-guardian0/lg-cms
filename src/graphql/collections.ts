import {CollectionPropsFragment} from "@/graphql/collection-props";

export const CollectionsQuery = `
${CollectionPropsFragment}
query {
	collections {
		items {
			...CollectionPropsFragment
		}
	}
}
`;