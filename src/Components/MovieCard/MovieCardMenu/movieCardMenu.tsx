import React from 'react';

import styles from './movieCardMenu.module.scss';
import ModalCloseButton from '../../ModalCloseButton';
import DeleteMovieModal from '../../DeleteMovieModal';
import EditMovieModal from '../../EditMovieModal';

type MovieCardMenuProps = { onCloseClick: () => void };

const MovieCardMenu: React.FunctionComponent<MovieCardMenuProps> = ({ onCloseClick }) => {
    return (
        <div className={styles.wrapper}>
            <ModalCloseButton onClick={onCloseClick} />
            <EditMovieModal />
            <DeleteMovieModal />
        </div>
    );
};

export default MovieCardMenu;
