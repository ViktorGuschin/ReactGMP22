import React from 'react';

import MainNavigation from '../MainNavigation';
import MovieList from '../MovieList';
import styles from './main.module.scss';

const Main: React.FunctionComponent = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.navigation}>
                <MainNavigation />
                <div className={styles.moviesFound}>
                    <span className={styles.moviesFoundCount}>39</span> movies found
                </div>
            </div>
            <MovieList />
        </div>
    );
};

export default Main;
