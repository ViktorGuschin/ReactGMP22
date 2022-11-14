import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

import styles from './editMovieModal.module.scss';
import ModalCloseButton from '../ModalCloseButton';

export type Inputs = {
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
    } = useForm<Inputs>();

    const handleShownModal = event => {
        event.stopPropagation();
        setShowModal(true);
    };
    const handleCloseModal = () => setShowModal(false);
    const submitForm = () => {};

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
                            <form onSubmit={handleSubmit(submitForm)}>
                                {/* register your input into the hook by invoking the "register" function */}
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
                                            <span className={styles.errorMessage}>This field is required</span>
                                        )}
                                    </div>
                                    <div className={styles.formItem}>
                                        <label htmlFor="releaseDate">release date</label>
                                        <input
                                            id="releaseDate"
                                            className={styles.inputRight}
                                            defaultValue=""
                                            {...register('releaseDate')}
                                        />
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formItem}>
                                        <label htmlFor="movieUrl">movie url</label>
                                        <input
                                            id="movieUrl"
                                            className={styles.inputLeft}
                                            defaultValue=""
                                            {...register('movieUrl')}
                                        />
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
                                            defaultValue=""
                                            {...register('runtime')}
                                        />
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={styles.formItem}>
                                        <label htmlFor="overview">overview</label>
                                        <textarea
                                            id="overview"
                                            className={styles.inputOverview}
                                            defaultValue=""
                                            {...register('overview')}
                                        />
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
