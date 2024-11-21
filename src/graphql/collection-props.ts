import {ImagePropsFragment} from "@/graphql/image-props";

export const CollectionPropsFragment = `
${ImagePropsFragment}
fragment CollectionPropsFragment on Collection {
    id
    parentId
    name
    slug
    featuredAsset {
        ...ImageProps
    }
    assets {
        ...ImageProps
    }
    translations {
        languageCode
        name
        slug
    }
}
`