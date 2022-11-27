import React, { useEffect, useState } from 'react';

import styles from './sorting.module.scss';
import useAppDispatch from '../../Hooks/useAppDispatch';
import { sortMovies } from '../../Containers/MovieList/movieListSlice';

const Sorting: React.FunctionComponent = () => {
    const [sortBy, setSortBy] = useState('all');
    const dispatch = useAppDispatch();

    const handleOnChange = e => setSortBy(e.target.value);

    useEffect(() => {
        dispatch(sortMovies(sortBy));
    }, [sortBy, dispatch]);

    return (
        <div className={styles.wrapper}>
            <span className={styles.label}>sort by</span>
            <select className={styles.select} onChange={handleOnChange}>
                <option value="genre">genre</option>
                <option value="rating">rating</option>
                <option value="releaseDate">release date</option>
            </select>
        </div>
    );
};

export default Sorting;
