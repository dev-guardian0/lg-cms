'use client';

import React from "react";

export default function SyncButcherCategoriesButton() {
	const performSync = async () => {
		const res = await fetch('/api/butcher-categories/sync-vendure', {
			method: 'POST',
		});

		console.log(res);
	}

	return (
		<div onClick={performSync} style={{display: 'flex', justifyContent: 'end', marginLeft: '0.9615384615rem', marginRight: '0.9615384615rem'}}>
			<a className="pill pill--style-light pill--has-link pill--has-action" href="#"><span className="pill__label">Sync With Vendure</span> </a>
		</div>
	)
}