import React from 'react';

import MovieCard, { MovieCardArgs } from '../../Components/MovieCard';
import styles from './movieList.module.scss';

const mockData: MovieCardArgs[] = [
    {
        poster: '1',
        name: 'Pulp Fiction',
        year: 2004,
        genre: 'Action & Adventure',
    },
    {
        poster: '2',
        name: 'Bohemian Rhapsody',
        year: 2003,
        genre: 'Drama, Biography, Music',
    },
    {
        poster: '3',
        name: 'Kill Bill: Vol 2',
        year: 1994,
        genre: 'Oscar winning Movie',
    },
    {
        poster: '4',
        name: 'Avengers: War of Infinity',
        year: 2004,
        genre: 'Action & Adventure',
    },
    {
        poster: '5',
        name: 'Inception',
        year: 2003,
        genre: 'Action & Adventure',
    },
    {
        poster: '6',
        name: 'Reservoir dogs',
        year: 1994,
        genre: 'Oscar winning Movie',
    },
];

const MovieList: React.FunctionComponent = () => {
    return (
        <div className={styles.wrapper}>
            {mockData.map(film => {
                return (
                    <MovieCard
                        key={film.name}
                        genre={film.genre}
                        name={film.name}
                        poster={film.poster}
                        year={film.year}
                    />
                );
            })}
        </div>
    );
};

export default MovieList;
