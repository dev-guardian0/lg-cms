'use client'

import { useRowLabel } from '@payloadcms/ui'

export default function MultiplePanelCTALabel() {
	const { data, rowNumber } = useRowLabel<{ title?: string }>()

	const customLabel = data?.title || `Panel ${String(rowNumber).padStart(2, '0')}`

	return (
		<div>{customLabel}</div>
	)
}