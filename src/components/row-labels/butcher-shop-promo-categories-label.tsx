'use client'

import { useRowLabel } from '@payloadcms/ui'
import {useState, useEffect} from "react";

export default function ButcherShopPromoCategoriesLabel() {
	const { data, rowNumber } = useRowLabel<{ category?:string }>()

	const [label, setLabel] = useState(`Category ${String(rowNumber).padStart(2, '0')}`)

	useEffect(() => {
		fetch(
			`/api/butcher-categories/${data.category!}`
		).then(async (res) => {
			setLabel((await res.json()).title)
		})
	}, [data.category]);

	return (
		<div>{label}</div>
	)
}