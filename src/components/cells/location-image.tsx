'use client'

import {useEffect, useState} from "react";

export default function LocationImageCell({rowData: data}:{rowData:any}) {
	const [src, setSrc] = useState(null)

	useEffect(() => {
		if (!data.primaryImage && !data.heroImage) {
			return;
		}

		const image = data.primaryImage ?? data.heroImage;


		fetch(
			`/api/media/${image}`
		).then(async (res) => {
			const media = await res.json();
			setSrc(media.url);
		})
	}, [data.primaryImage, data.heroImage]);

	return (
		<div>
			{src && <img src={src} alt={data.alt} style={{width: '72px', height: '72px', objectFit: 'cover'}} />}
		</div>
	)
}