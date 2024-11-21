'use client'

import { useRowLabel } from '@payloadcms/ui'

export default function LinksLabel() {
	const { data, rowNumber } = useRowLabel<{ link?: {  label?: string } }>()

	const customLabel = data?.link?.label || `Link ${String(rowNumber).padStart(2, '0')}`

	return (
		<div>{customLabel}</div>
	)
}