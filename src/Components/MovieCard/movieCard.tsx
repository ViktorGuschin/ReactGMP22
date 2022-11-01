import React from 'react';

import styles from './movieCard.module.scss';

export type MovieCardArgs = {
    poster: string;
    name: string;
    year: number;
    genre: string;
};

const MovieCard: React.FunctionComponent<MovieCardArgs> = ({ poster, name, year, genre }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.poster}>
                {poster}-{name}
            </div>
            <div className={styles.nameWrapper}>
                <span>{name}</span>
                <span className={styles.year}>{year}</span>
            </div>
            <div className={styles.genre}>{genre}</div>
        </div>
    );
};

export default MovieCard;
