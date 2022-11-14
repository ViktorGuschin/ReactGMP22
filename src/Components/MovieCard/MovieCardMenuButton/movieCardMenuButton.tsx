import React from 'react';

import styles from './movieCardMenuButton.module.scss';
import MovieCardMenu from '../MovieCardMenu';

const MovieCardMenuButton: React.FunctionComponent<{
    openClick: () => void;
    closeClick: () => void;
    showMovieCardMenu: boolean;
}> = ({ openClick, closeClick, showMovieCardMenu }) => {
    const handleOpenClick = event => {
        event.stopPropagation();
        openClick();
    };

    return (
        <>
            <div className={styles.menu} data-role="movieCardMenuButton" onClick={event => handleOpenClick(event)} />
            {showMovieCardMenu && <MovieCardMenu onCloseClick={() => closeClick()} />}
        </>
    );
};

export default MovieCardMenuButton;
