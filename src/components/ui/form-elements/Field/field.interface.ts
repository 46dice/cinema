import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IFieldProps {
	error?: FieldError | undefined;
	placeholder: string;
	title?: string;
}

type InputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends InputPropsField {}
