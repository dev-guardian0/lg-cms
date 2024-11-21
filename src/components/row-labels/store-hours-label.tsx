'use client'

import { useRowLabel } from '@payloadcms/ui'

export default function StoreHoursLabel() {
	const { data, rowNumber } = useRowLabel<{ day?: string, open?: string, close?: string }>()

	let customLabel = `Hours ${String(rowNumber).padStart(2, '0')}`;
	if (data?.day) {
		if (!data?.open || !data?.close) {
			customLabel = data?.day;
		} else {
			customLabel = `${data?.day} - ${data?.open} - ${data?.close}`;
		}
	}

	return (
		<div>{customLabel}</div>
	)
}