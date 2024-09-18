import MovieList from './MovieList/MovieList';

const MoviesContainer = () => {
	return (
		<div className="py-layout">
			<h2 className="text-white">Popular Movies</h2>
			<MovieList />
		</div>
	);
};

export default MoviesContainer;
