import { TypeMaterialIcons } from '@/shared/icons/icons.interface';

export interface IMenuItem {
	icon: TypeMaterialIcons;
	title: string;
	link: string;
}

export interface IMenu {
	items: IMenuItem[];
	title: string;
}
