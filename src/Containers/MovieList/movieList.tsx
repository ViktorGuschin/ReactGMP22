import React, { useEffect } from 'react';

import MovieCard from '../../Components/MovieCard';
import styles from './movieList.module.scss';
import { loadMovies } from './movieListSlice';
import useAppSelector from '../../Hooks/useAppSelector';
import useAppDispatch from '../../Hooks/useAppDispatch';

const MovieList: React.FunctionComponent = () => {
    const loadingStatus = useAppSelector(state => state.movieList.loading);
    const movies = useAppSelector(state => state.movieList.entities);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadMovies());
    }, [dispatch]);

    return (
        !loadingStatus && (
            <div className={styles.wrapper}>
                {movies?.map(film => {
                    return (
                        <MovieCard
                            key={film.id}
                            id={film.id}
                            genres={film.genres}
                            title={film.title}
                            poster_path={film.poster_path}
                            release_date={film.release_date}
                            vote_average={film.vote_average}
                            runtime={film.runtime}
                            overview={film.overview}
                        />
                    );
                })}
            </div>
        )
    );
};

export default MovieList;
