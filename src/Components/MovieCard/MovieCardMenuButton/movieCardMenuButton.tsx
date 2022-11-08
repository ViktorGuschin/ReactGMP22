import React from 'react';

import styles from './movieCardMenuButton.module.scss';
import MovieCardMenu from '../MovieCardMenu';

const MovieCardMenuButton: React.FunctionComponent<{
    openClick: () => void;
    closeClick: () => void;
    showMovieCardMenu: boolean;
}> = ({ openClick, closeClick, showMovieCardMenu }) => {
    return (
        <>
            <div className={styles.menu} data-role="movieCardMenuButton" onClick={openClick} />
            {showMovieCardMenu && <MovieCardMenu onCloseClick={() => closeClick()} />}
        </>
    );
};

export default MovieCardMenuButton;
