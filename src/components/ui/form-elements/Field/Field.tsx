import cn from 'classnames';
import { forwardRef } from 'react';

import styles from './Field.module.scss';
import { IField } from './field.interface';

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, title, ...rest }, ref) => {
		return (
			<div className={cn(styles.common, styles.field)}>
				<label className={styles.label}>
					{title}
					<input
						type={type}
						placeholder={placeholder}
						ref={ref}
						{...rest}
					/>
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);

Field.displayName = 'Field';

export default Field;
