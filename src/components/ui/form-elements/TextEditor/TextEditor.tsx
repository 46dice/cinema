import { forwardRef } from 'react';
import { Control, useController } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { IGenreEditInput } from '@/shared/types/movie.types';

import styles from './TextEditor.module.scss';

interface ITextEditor {
	control: Control<IGenreEditInput, any>;
	name: string;
	error?: { message?: string };
}

const TextEditor = forwardRef<ReactQuill, ITextEditor>(
	({ error, control }, ref) => {
		const {
			field: { onChange, value },
		} = useController({
			name: 'description',
			control,
			rules: { required: true },
		});

		return (
			<div className={styles.wrapper}>
				<ReactQuill
					ref={ref}
					className={styles.editor}
					theme="snow"
					value={value}
					onChange={onChange}
					modules={{
						toolbar: [
							[{ header: [1, 2, false] }],
							[
								'bold',
								'italic',
								'underline',
								'strike',
								'blockquote',
							],
							[{ list: 'ordered' }, { list: 'bullet' }],
							['link', 'image'],
							['clean'],
						],
					}}
				/>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);

export default TextEditor;
