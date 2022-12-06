import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './deleteMovieModal.module.scss';
import ModalCloseButton from '../ModalCloseButton';
import useAppSelector from '../../Hooks/useAppSelector';
import useAppDispatch from '../../Hooks/useAppDispatch';
import { deleteMovie } from './deleteMovieModalSlice';
import { clearActiveMovie } from '../MovieCard/movieCardSlice';
import { loadMovies } from '../../Containers/MovieList/movieListSlice';

const DeleteMovieModal: React.FunctionComponent = () => {
    const [showModal, setShowModal] = useState(false);
    const movieId = useAppSelector(state => state.movieCard.entity?.id);
    const dispatch = useAppDispatch();

    const handleShownModal = event => {
        event.stopPropagation();
        setShowModal(true);
    };
    const handleCloseModal = () => setShowModal(false);

    const handleDeleteMovie = () => {
        dispatch(deleteMovie(movieId));
        dispatch(clearActiveMovie());
        dispatch(loadMovies());
        setShowModal(false);
    };

    return (
        <>
            <div className={styles.menuItem} onClick={event => handleShownModal(event)}>
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
                                <input
                                    className={styles.button}
                                    type="submit"
                                    value="confirm"
                                    onClick={handleDeleteMovie}
                                />
                            </div>
                        </div>
                    </>,
                    document.body,
                )}
        </>
    );
};

export default DeleteMovieModal;
