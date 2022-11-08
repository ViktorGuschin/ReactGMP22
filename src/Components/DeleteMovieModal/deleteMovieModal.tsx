import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './deleteMovieModal.module.scss';
import ModalCloseButton from '../ModalCloseButton';

const DeleteMovieModal: React.FunctionComponent = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShownModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <div className={styles.menuItem} onClick={handleShownModal}>
                Delete
            </div>
            {showModal &&
                ReactDOM.createPortal(
                    <>
                        <div className={styles.wrapper} onClick={handleCloseModal} />
                        <div className={styles.wrapperContext}>
                            <ModalCloseButton onClick={handleCloseModal} />
                            <h2 className={styles.header}>delete movie</h2>
                            <p className={styles.question}>Are you sure you want to delete this movie?</p>
                            <div className={styles.wrapperButton}>
                                <input className={styles.button} type="submit" value="confirm" />
                            </div>
                        </div>
                    </>,
                    document.body,
                )}
        </>
    );
};

export default DeleteMovieModal;
