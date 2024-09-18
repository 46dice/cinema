'use client';

import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/ui/form-elements/Button/Button';
import Heading from '@/ui/heading/Heading';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';

import { IEmailPassword } from '@/store/user/user.interface';

import AuthFields from './AuthFields';
import { IAuthInput } from './AuthInputs.interface';
import styles from './auth.module.scss';

const Auth: FC = () => {
	const [type, setType] = useState<'login' | 'register'>('login');

	const { register: handleRegister, login: handleLogin } = useActions();

	const { user, isLoading } = useAuth();

	useAuthRedirect();

	const {
		register: registerInput,
		handleSubmit,
		reset,
		formState,
	} = useForm({
		mode: 'onChange',
	});

	const login = (data: IEmailPassword) => {
		handleLogin(data);
	};
	const register = (data: IEmailPassword) => {
		handleRegister(data);
	};

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data as IEmailPassword);
		else if (type === 'register') register(data as IEmailPassword);

		reset();
	};

	return (
		<section className={styles.wrapper}>
			<Heading title="Auth" className="text-white text-2xl text-center" />
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<AuthFields
					register={registerInput}
					formState={formState}
					isPasswordRequired
				/>
				<div className={styles.buttons}>
					<Button
						type="submit"
						onClick={() => setType('login')}
						disabled={isLoading}
					>
						Login
					</Button>

					<Button
						type="submit"
						onClick={() => setType('register')}
						disabled={isLoading}
					>
						Register
					</Button>
				</div>
			</form>
		</section>
	);
};

export default Auth;
