import { IMovie } from './movie.types';

export interface IUserUI {
	_id: string;
	createdAt: Date;
	email: string;
	favorites: IMovie[];
	isAdmin: boolean;
}
