import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

import styles from './addMovieModal.module.scss';
import { AddMovieButtonProps } from '../AddMovieButton/addMovieButton';
import ModalCloseButton from '../ModalCloseButton';
import useAppDispatch from '../../Hooks/useAppDispatch';
import { addMovie } from './addMovieModalSlice';
import { AddMovieCardArgs } from '../../Models';
import { loadMovies } from '../../Containers/MovieList/movieListSlice';

export type Inputs = {
    genre: string;
    movieUrl: string;
    overview: string;
    rating: string;
    releaseDate: string;
    runtime: number;
    title: string;
};

type AddMovieModalProps = AddMovieButtonProps;

const AddMovieModal: React.FunctionComponent<AddMovieModalProps> = ({ toggleModal }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();
    const [complete, setComplete] = useState(false);
    const dispatch = useAppDispatch();

    const customHandleSubmit = async (data: Inputs) => {
        const movie: AddMovieCardArgs = {
            title: data.title,
            release_date: data.releaseDate,
            poster_path: data.movieUrl,
            vote_average: Number(data.rating),
            genres: [data.genre],
            runtime: Number(data.runtime),
            overview: data.overview,
        };
        await dispatch(addMovie(movie));
        setComplete(true);
        reset();
        dispatch(loadMovies());
    };

    const handleComplete = () => {
        toggleModal(false);
        setComplete(false);
    };

    return ReactDOM.createPortal(
        <>
            <div className={styles.wrapper} onClick={() => toggleModal(false)} />
            {!complete && (
                <div className={styles.wrapperContext}>
                    <ModalCloseButton onClick={() => toggleModal(false)} />
                    <h2 className={styles.header}>add movie</h2>
                    <form onSubmit={handleSubmit(data => customHandleSubmit(data))}>
                        <div className={styles.formRow}>
                            <div className={styles.formItem}>
                                <label htmlFor="title">title</label>
                                <input
                                    id="title"
                                    className={styles.inputLeft}
                                    type=""
                                    defaultValue=""
                                    {...register('title', { required: true })}
                                />
                                {errors.title && (
                                    <span className={styles.errorMessage}>Title is not allowed to be empty</span>
                                )}
                            </div>
                            <div className={styles.formItem}>
                                <label htmlFor="releaseDate">release date</label>
                                <input
                                    type="date"
                                    pattern="\d{2}/\d{2}/\d{4}"
                                    id="releaseDate"
                                    className={`${styles.inputRight} ${styles.releaseDate}`}
                                    defaultValue=""
                                    {...register('releaseDate', { required: true })}
                                />
                                {errors.genre && (
                                    <span className={styles.errorMessage}>Release Date is not allowed to be empty</span>
                                )}
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formItem}>
                                <label htmlFor="movieUrl">movie url</label>
                                <input
                                    id="movieUrl"
                                    className={styles.inputLeft}
                                    defaultValue=""
                                    {...register('movieUrl', { pattern: /^(http|https):\/\/[^ "]+$/, required: true })}
                                />
                                {errors.movieUrl && (
                                    <span className={styles.errorMessage}>Movie Url must be a valid uri</span>
                                )}
                            </div>
                            <div className={styles.formItem}>
                                <label htmlFor="rating">rating</label>
                                <input
                                    id="rating"
                                    className={styles.inputRight}
                                    defaultValue=""
                                    {...register('rating')}
                                />
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formItem}>
                                <label htmlFor="genre">genre</label>
                                <input
                                    id="genre"
                                    className={styles.inputLeft}
                                    defaultValue=""
                                    {...register('genre', { required: true })}
                                />
                                {errors.genre && (
                                    <span className={styles.errorMessage}>Select at least one genre to proceed</span>
                                )}
                            </div>
                            <div className={styles.formItem}>
                                <label htmlFor="runtime">runtime</label>
                                <input
                                    id="runtime"
                                    className={styles.inputRight}
                                    defaultValue=""
                                    {...register('runtime', { required: true, min: 0 })}
                                />
                                {errors.runtime && (
                                    <span className={styles.errorMessage}>Runtime must be a greater than zero</span>
                                )}
                            </div>
                        </div>
                        <div className={styles.formRow}>
                            <div className={styles.formItem}>
                                <label htmlFor="overview">overview</label>
                                <textarea
                                    id="overview"
                                    className={styles.inputOverview}
                                    defaultValue=""
                                    {...register('overview', { required: true })}
                                />
                                {errors.overview && (
                                    <span className={styles.errorMessage}>Overview is not allowed to be empty</span>
                                )}
                            </div>
                        </div>
                        <div className={styles.formButtons}>
                            <input type="reset" value="reset" />
                            <input type="submit" value="submit" />
                        </div>
                    </form>
                </div>
            )}
            {complete && (
                <div className={styles.wrapperCompleteContext}>
                    <ModalCloseButton onClick={handleComplete} />
                    <div className={styles.completeContext}>
                        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="33" cy="33" r="32.5" fill="#F65261" stroke="#F65261" />
                            <path d="M14 35.8347L24.1175 46L49 21" stroke="white" />
                        </svg>
                        <h2 className={styles.header}>congratulations !</h2>
                        <p className={styles.text}>The movie has been added to database successfully </p>
                    </div>
                </div>
            )}
        </>,
        document.body,
    );
};

export default AddMovieModal;
