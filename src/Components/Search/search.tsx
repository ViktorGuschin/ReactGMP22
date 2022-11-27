import React, { useEffect, useState } from 'react';

import styles from './search.module.scss';
import useAppDispatch from '../../Hooks/useAppDispatch';
import { searchMoviesByTitle } from '../../Containers/MovieList/movieListSlice';

const Search: React.FunctionComponent = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useAppDispatch();

    const handleOnChange = e => setSearchText(e.target.value);

    useEffect(() => {
        if (searchText?.length > 2) {
            dispatch(searchMoviesByTitle(searchText));
        }
    }, [searchText, dispatch]);
    return (
        <>
            <h2 className={styles.searchText}>find your movie</h2>
            <div className={styles.searchInputWrapper}>
                <input
                    className={styles.searchInput}
                    type="search"
                    value={searchText}
                    onChange={handleOnChange}
                    placeholder="What do you want to watch?"
                />
                <button className={styles.searchButton} type="button">
                    search
                </button>
            </div>
        </>
    );
};

export default Search;
