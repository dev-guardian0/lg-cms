'use client'

import {useEffect, useState} from "react";

export default function CategoryImageCell({rowData: data}:{rowData:any}) {
	const [src, setSrc] = useState(null)

	useEffect(() => {
		if (!data.defaultImage) {
			return;
		}

		fetch(
			`/api/media/${data.defaultImage}`
		).then(async (res) => {
			const media = await res.json();
			setSrc(media.url);
		})
	}, [data.defaultImage]);

	return (
		<div>
			{src && <img src={src} alt={data.alt} style={{width: '100%', maxWidth: '64px', height: 'auto'}} />}
		</div>
	)
}