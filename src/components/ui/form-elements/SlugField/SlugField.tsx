'use client';

import { FC, useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import Field from '../Field/Field';

import styles from './SlugField.module.scss';

interface ISlugField {
	register: UseFormRegister<any>;
	error: FieldError;
	generate: () => void;
}

const SlugField: FC<ISlugField> = ({ register, error, generate }) => {
	return (
		<div className="relative">
			<Field
				{...register('slug', {
					required: 'slug is required',
				})}
				title="slug"
				placeholder="slug"
				error={error}
			/>
			<button className={styles.button} onClick={generate}>
				generate
			</button>
		</div>
	);
};

export default SlugField;
