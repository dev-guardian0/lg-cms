'use client'

import { useRowLabel } from '@payloadcms/ui'

export default function AreaNameLabel() {
	const { data, rowNumber } = useRowLabel<{ name?: string }>()

	let customLabel = `Area ${String(rowNumber).padStart(2, '0')}`;
	if (data?.name) {
		customLabel = data?.name;
	}

	return (
		<div>{customLabel}</div>
	)
}