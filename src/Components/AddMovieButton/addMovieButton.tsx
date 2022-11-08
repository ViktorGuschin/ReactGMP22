import React from 'react';

import styles from './addMovieButton.module.scss';

export type AddMovieButtonProps = {
    toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddMovieButton: React.FunctionComponent<AddMovieButtonProps> = ({ toggleModal }) => {
    return (
        <button className={styles.addMovieButton} type="button" onClick={() => toggleModal(true)}>
            + add movie
        </button>
    );
};

export default AddMovieButton;
