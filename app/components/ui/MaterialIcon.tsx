import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';

import { TypeMaterialIcons } from '@/shared/icons/icons.interface';

const MaterialIcon: FC<{ icon: TypeMaterialIcons }> = ({ icon }) => {
	const IconComponent = MaterialIcons[icon];

	return <IconComponent /> || <MaterialIcons.Md10K />;
};

export default MaterialIcon;
