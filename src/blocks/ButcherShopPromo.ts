import {Block} from "payload";
import {Link} from "@/fields/Link";
// import {RowLabelArgs} from "payload/dist/admin/components/forms/RowLabel/types";
// import {useState, useEffect} from "react";

export const ButcherShopPromo: Block = {
	slug: 'butcher-shop-promo',
	imageURL: '/img/blocks/butcher-shop-promo.png',
	dbName: 'bs_promos',
	labels: {
		singular: 'Butcher Shop Promo',
		plural: 'Butcher Shop Promo',
	},
	fields: [
		{
			name: "basicInfo",
			type: 'group',
			fields: [
				{
					name: 'backgroundImage',
					type: 'upload',
					required: false,
					relationTo: 'media',
					localized: true,
				},
				{
					name: "title",
					type: "text",
					required: false,
					localized: true,
				},
				{
					name: "description",
					type: "textarea",
					localized: true,
				},
			]
		},
		Link(),
		{
			name: "categories",
			type: "array",
			minRows: 1,
			admin: {
				components: {
					RowLabel: '../components/row-labels/butcher-shop-promo-categories-label.tsx',
					// RowLabel: ({data, index}: RowLabelArgs) => {
					// 	const [label, setLabel] = useState(`Category ${String(index).padStart(2, '0')}`)
					//
					// 	useEffect(() => {
					// 		console.log(process.env.PAYLOAD_PUBLIC_SITE_URL,process.env.PAYLOAD_PUBLIC_API_ROUTE);
					//
					// 		fetch(
					// 			`/api/butcher-categories/${data.category}`
					// 		).then(async (res) => {
					// 			setLabel((await res.json()).title)
					// 		})
					// 	}, [data.category])
					//
					// 	return label
					// 	// return data?.title || `Panel ${String(index).padStart(2, '0')}`
					// },
				},
			},
			fields: [
				{
					name: "category",
					type: "relationship",
					relationTo: "butcher-categories",
				},
				{
					name: "columns",
					type: "number",
					min: 1,
					max: 3,
					defaultValue: 1,
				},
				{
					name: "rows",
					type: "number",
					min: 1,
					max: 3,
					defaultValue: 1,
				},
				{
					name: "image",
					type: "upload",
					required: false,
					localized: true,
					relationTo: 'media',
				},
			]
		}
	]
}