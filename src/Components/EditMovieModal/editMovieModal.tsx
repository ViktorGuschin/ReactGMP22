import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

import styles from './editMovieModal.module.scss';
import ModalCloseButton from '../ModalCloseButton';
import useAppDispatch from '../../Hooks/useAppDispatch';
import { MovieCardArgs } from '../../Models';
import { loadMovies } from '../../Containers/MovieList/movieListSlice';
import { editMovie } from './editMovieModalSlice';
import useAppSelector from '../../Hooks/useAppSelector';

export type Inputs = {
    id: number;
    genre: string;
    movieUrl: string;
    overview: string;
    rating: string;
    releaseDate: string;
    runtime: string;
    title: string;
};

const EditMovieModal: React.FunctionComponent = () => {
    const [showModal, setShowModal] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();
    const movie = useAppSelector(state => state.movieCard.entity);
    const dispatch = useAppDispatch();

    const handleShownModal = event => {
        event.stopPropagation();
        setShowModal(true);
    };
    const handleCloseModal = () => setShowModal(false);
    const submitEditMovieForm = async (formData: Inputs) => {
        const data: MovieCardArgs = {
            id: movie.id,
            title: formData.title,
            release_date: formData.releaseDate,
            poster_path: formData.movieUrl,
            vote_average: Number(formData.rating),
            genres: [formData.genre],
            runtime: Number(formData.runtime),
            overview: formData.overview,
        };
        await dispatch(editMovie(data));
        reset();
        dispatch(loadMovies());
    };

    return (
        <>
            <div className={styles.menuItem} onClick={event => handleShownModal(event)}>
                Edit
            </div>
            {showModal &&
                ReactDOM.createPortal(
                    <>
                        <div className={styles.wrapper} onClick={handleCloseModal} />
                        <div className={styles.wrapperContext}>
                            <ModalCloseButton onClick={handleCloseModal} />
                            <h2 className={styles.header}>edit movie</h2>
                            <form onSubmit={handleSubmit(data => submitEditMovieForm(data))}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <div className={styles.formRow}>
                                    <div className={styles.formItem}>
                                        <label htmlFor="title">title</label>
                                        <input
                                            id="title"
                                            className={styles.inputLeft}
                                            type=""
                                            defaultValue={movie.title}
                                            {...register('title', { required: true })}
                                        />
                                        {errors.title && (
                                            <span className={styles.errorMessage}>
                                                Title is not allowed to be empty
                                            </span>
                                        )}
                                    </div>
                                    <div className={styles.formItem}>
                                        <label htmlFor="releaseDate">release date</label>
                                        <input
                                            id="releaseDate"
                                            className={styles.inputRight}
                                            defaultValue={movie.release_date}
                                            {...register('releaseDate', { required: true })}
                                        />
                                        {errors.genre && (
                                            <span className={styles.errorMessage}>
                                                Release Date is not allowed to be empty
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formItem}>
                                        <label htmlFor="movieUrl">movie url</label>
                                        <input
                                            id="movieUrl"
                                            className={styles.inputLeft}
                                            defaultValue={movie.poster_path}
                                            {...register('movieUrl')}
                                        />
                                    </div>
                                    <div className={styles.formItem}>
                                        <label htmlFor="rating">rating</label>
                                        <input
                                            id="rating"
                                            className={styles.inputRight}
                                            defaultValue={movie.vote_average}
                                            {...register('movieUrl', {
                                                pattern: /^(http|https):\/\/[^ "]+$/,
                                                required: true,
                                            })}
                                        />
                                        {errors.movieUrl && (
                                            <span className={styles.errorMessage}>Movie Url must be a valid uri</span>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formItem}>
                                        <label htmlFor="genre">genre</label>
                                        <input
                                            id="genre"
                                            className={styles.inputLeft}
                                            defaultValue={movie.genres}
                                            {...register('genre', { required: true })}
                                        />
                                        {errors.genre && (
                                            <span className={styles.errorMessage}>
                                                Select at least one genre to proceed
                                            </span>
                                        )}
                                    </div>
                                    <div className={styles.formItem}>
                                        <label htmlFor="runtime">runtime</label>
                                        <input
                                            id="runtime"
                                            className={styles.inputRight}
                                            defaultValue={movie.runtime}
                                            {...register('runtime', { required: true, min: 0 })}
                                        />
                                        {errors.runtime && (
                                            <span className={styles.errorMessage}>
                                                Runtime must be a greater than zero
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formItem}>
                                        <label htmlFor="overview">overview</label>
                                        <textarea
                                            id="overview"
                                            className={styles.inputOverview}
                                            defaultValue={movie.overview}
                                            {...register('overview', { required: true })}
                                        />
                                        {errors.overview && (
                                            <span className={styles.errorMessage}>
                                                Overview is not allowed to be empty
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.formButtons}>
                                    <input type="reset" value="reset" />
                                    <input type="submit" value="submit" />
                                </div>
                            </form>
                        </div>
                    </>,
                    document.body,
                )}
        </>
    );
};

export default EditMovieModal;
