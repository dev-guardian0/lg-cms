'use client'

import { useRowLabel } from '@payloadcms/ui'

export default function MenuLabel() {
	const { data, rowNumber } = useRowLabel<{ title?:string }>()

	console.log(data);
	const customLabel = data?.title || `Menu ${String(rowNumber).padStart(2, '0')}`

	return (
		<div>{customLabel}</div>
	)
}