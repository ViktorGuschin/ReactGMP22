import React, { useContext } from 'react';

import { MovieCardArgs } from '../MovieCard';
import Brand from '../Brand';
import SearchButton from '../SearchButton';

import styles from './movieDetail.module.scss';
import { AppContext } from '../../Contexts/appContext';
import getReleaseYear from '../../Utils/getReleaseYear';
import getMovieLength from '../../Utils/getMovieLength';

type MovieDetailType = {
    activeMovie: MovieCardArgs;
};

const MovieDetail: React.FC<MovieDetailType> = ({ activeMovie }) => {
    const { setShowHeaderSearch, setShowMovieDetail } = useContext(AppContext);

    const handleShowHeaderSearch = () => {
        setShowMovieDetail(false);
        setShowHeaderSearch(true);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperBrand}>
                <Brand />
                <SearchButton showSearch={handleShowHeaderSearch} />
            </div>
            <div className={styles.wrapperContext}>
                <img className={styles.poster} alt={activeMovie.title} src={activeMovie.poster_path} />
                <div className={styles.wrapperInfo}>
                    <div className={styles.wrapperTitle}>
                        <h2 className={styles.title}>{activeMovie.title}</h2>
                        <div className={styles.voteAverage}>
                            <span>{activeMovie.vote_average}</span>
                        </div>
                    </div>
                    <span className={styles.genres}>{activeMovie.genres.join(', ')}</span>
                    <div className={styles.wrapperDate}>
                        <span>{getReleaseYear(activeMovie.release_date)}</span>
                        <span>{getMovieLength(activeMovie.runtime)}</span>
                    </div>
                    <p className={styles.overview}>{activeMovie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
