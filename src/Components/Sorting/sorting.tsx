import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './sorting.module.scss';
import useAppDispatch from '../../Hooks/useAppDispatch';
import { sortMovies } from '../../Containers/MovieList/movieListSlice';

const Sorting: React.FunctionComponent = () => {
    const [sortBy, setSortBy] = useState('genre');
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const handleOnChange = e => setSortBy(e.target.value);

    useEffect(() => {
        dispatch(sortMovies(sortBy));
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('sortBy', sortBy);
        setSearchParams(newSearchParams);
    }, [sortBy, dispatch, searchParams, setSearchParams]);

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
