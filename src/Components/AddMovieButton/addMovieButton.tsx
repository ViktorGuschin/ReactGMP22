import React from 'react';

import styles from './addMovieButton.module.scss';

const AddMovieButton: React.FunctionComponent = () => {
    return (
        <button className={styles.addMovieButton} type="button">
            + add movie
        </button>
    );
};

export default AddMovieButton;
