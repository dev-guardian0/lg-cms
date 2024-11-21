'use client'

import { useRowLabel } from '@payloadcms/ui'

export default function MenuItemLabel() {
	const { data, rowNumber } = useRowLabel<{ link?: {  label?: string } }>()

	const customLabel = data?.link?.label || `Menu Item ${String(rowNumber).padStart(2, '0')}`

	return (
		<div>{customLabel}</div>
	)
}