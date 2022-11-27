import React, { useContext, useState } from 'react';

import styles from './movieCard.module.scss';
import MovieCardMenuButton from './MovieCardMenuButton';
import { AppContext } from '../../Contexts/appContext';
import getReleaseYear from '../../Utils/getReleaseYear';
import { MovieCardArgs } from '../../Models';

const MovieCard: React.FunctionComponent<MovieCardArgs> = ({
    id,
    poster_path,
    title,
    release_date,
    genres,
    vote_average,
    runtime,
    overview,
}) => {
    const [showMovieCardMenu, setShowMovieCardMenu] = useState(false);
    const { setShowMovieDetail, setShowHeaderSearch, setActiveMovie } = useContext(AppContext);

    const handleOpenMovieCardMenu = () => {
        setShowMovieCardMenu(true);
    };
    const handleCloseMovieCardMenu = () => setShowMovieCardMenu(false);

    const handleShowMovieDetail = () => {
        const activeMovie: MovieCardArgs = {
            id,
            poster_path,
            title,
            release_date,
            genres,
            vote_average,
            runtime,
            overview,
        };
        setActiveMovie(activeMovie);
        setShowMovieDetail(true);
        setShowHeaderSearch(false);
    };

    return (
        <div className={styles.wrapper} onClick={() => handleShowMovieDetail()}>
            <img className={styles.poster} alt={title} src={poster_path} />
            <MovieCardMenuButton
                openClick={handleOpenMovieCardMenu}
                closeClick={handleCloseMovieCardMenu}
                showMovieCardMenu={showMovieCardMenu}
            />
            <div className={styles.nameWrapper}>
                <span>{title}</span>
                <span className={styles.year}>{getReleaseYear(release_date)}</span>
            </div>
            <div className={styles.genre}>{genres.join(', ')}</div>
        </div>
    );
};

export default MovieCard;
