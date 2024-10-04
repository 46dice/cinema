'use client';

import dynamic from 'next/dynamic';
import { FC } from 'react';
import { FieldError, useForm } from 'react-hook-form';

import AdminNavPanel from '@/components/ui/admin-navigation/AdminNavPanel';
import Button from '@/components/ui/form-elements/Button/Button';
import Field from '@/components/ui/form-elements/Field/Field';
import SlugField from '@/components/ui/form-elements/SlugField/SlugField';
import Heading from '@/components/ui/heading/Heading';

import formStyles from '@/ui/form-elements/admin-form.module.scss';

import { IGenreEditInput } from '@/shared/types/movie.types';

import { generateSlug } from '@/utils/string/generateSlug';

import { useGenreEdit } from './useGenreEdit';

const TextEditor = dynamic(
	() => import('@/ui/form-elements/TextEditor/TextEditor'),
	{ ssr: false }
);

const GenreEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState,
		setValue,
		getValues,
		reset,
		control,
	} = useForm<IGenreEditInput>({
		mode: 'onChange',
		defaultValues: {
			description: '',
		},
	});

	const { isLoading, error, data, onSubmit, isSuccess } =
		useGenreEdit(setValue);

	return (
		<>
			<AdminNavPanel />
			<Heading title="Edit genre" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				<div className={formStyles.fields}>
					<Field
						{...register('name', {
							required: 'Name is required',
						})}
						title="name"
						placeholder="Name"
						error={formState.errors.name}
					/>

					<SlugField
						register={register}
						error={formState.errors.slug as FieldError}
						generate={() => {
							const slug = generateSlug(getValues('name'));
							setValue('slug', slug);
						}}
					/>
					<Field
						{...register('icon', {
							required: 'icon is required',
						})}
						title="icon"
						placeholder="icon"
						error={formState.errors.icon}
					/>

					<TextEditor
						control={control}
						{...register('description', {
							required: 'Description is required',
						})}
					/>
				</div>
				<Button type="submit">Update</Button>
			</form>
		</>
	);
};

export default GenreEdit;
