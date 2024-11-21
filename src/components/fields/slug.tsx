'use client'
import {useField, useLocale} from '@payloadcms/ui'
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import slugify from "slugify";

export default function SlugField(args:any) {
	const { path, targetField, field: { name, label, required, localized } } : { path: string, targetField: string, field: { name: string, label?: string, required: boolean, localized: boolean } } = args;
	const { code } = useLocale()
	const { value, setValue } = useField<string>({ path });
	const { value:targetValue, setValue:setTargetValue } = useField<string>({ path:targetField });
	const checkboxPath = path.includes('.')
		? path.slice(0, path.lastIndexOf('.')) + '.' + name+'_auto_slug'
		: name+'_auto_slug';

	const { value:autoSlugValue, setValue:setAutoSlugValue } = useField<string>({ path:checkboxPath });

	const genSlug = useCallback((val?: string) => {
		let slug = slugify(val ?? '', {
			replacement: '-',
			lower: true,
			strict: true,
		})
			.substring(0, 64)
			.replaceAll('--', '-')
			.toLowerCase();

		if (slug !== value) {
			setValue(slug);
		}
	}, [setValue, value])

	useEffect(() => {
		if (autoSlugValue) {
			genSlug(targetValue);
		}
	}, [autoSlugValue, targetValue, genSlug]);

	const inputChanged = (e:ChangeEvent<HTMLInputElement>) => {
		setAutoSlugValue(false);

		genSlug(e.target.value);
	};

	return (
		<div className="field-type text" style={{flex: '1 1 auto'}}>
			<label className="field-label">{label ?? name}{required && <span className="required">*</span>}<span className="localized">— {code}</span></label>
			<div className="field-type__wrap">
				<input
					type="text"
					name={name}
					id={'field-'+name}
					onChange={inputChanged}
					value={value ?? ''}
				/>
			</div>
		</div>
	)
}