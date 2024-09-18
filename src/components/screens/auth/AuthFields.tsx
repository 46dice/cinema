import { FC } from 'react';
import { FieldError, FormState, UseFormRegister } from 'react-hook-form';

import Field from '@/components/ui/form-elements/Field/Field';

import { validEmail } from '@/utils/regex';

interface IAuthFields {
	register: UseFormRegister<any>;
	formState: FormState<any>;
	isPasswordRequired: boolean;
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
				type="email"
				placeholder="send e-mail"
				title="e-mail"
				error={errors.email as FieldError}
			/>

			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Please enter 6 symbols',
								},
							}
						: {}
				)}
				placeholder="send password"
				title="password"
				type="password"
				error={errors.password as FieldError}
			/>
		</>
	);
};

export default AuthFields;
