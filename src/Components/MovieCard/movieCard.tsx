import React, { useState } from 'react';

import styles from './movieCard.module.scss';
import MovieCardMenuButton from './MovieCardMenuButton';

export type MovieCardArgs = {
    poster: string;
    name: string;
    year: number;
    genre: string;
};

const MovieCard: React.FunctionComponent<MovieCardArgs> = ({ poster, name, year, genre }) => {
    const [showMovieCardMenu, setShowAddMovieModal] = useState(false);

    const handleOpenMovieCardMenu = () => setShowAddMovieModal(true);
    const handleCloseMovieCardMenu = () => setShowAddMovieModal(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.poster}>
                <MovieCardMenuButton
                    openClick={handleOpenMovieCardMenu}
                    closeClick={handleCloseMovieCardMenu}
                    showMovieCardMenu={showMovieCardMenu}
                />
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
