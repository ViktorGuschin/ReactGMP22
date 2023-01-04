import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import styles from './search.module.scss';
import useAppDispatch from '../../Hooks/useAppDispatch';
import { searchMoviesByTitle } from '../../Containers/MovieList/movieListSlice';

const Search: React.FunctionComponent = () => {
    // @ts-ignore
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();
    // @ts-ignore
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const handleOnChange = e => setSearchText(e.target.value);
    const handleSearch = () => {
        dispatch(searchMoviesByTitle(searchText));
        navigate(`/search/${searchText}?${searchParams}`);
    };

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
                <button className={styles.searchButton} type="button" onClick={handleSearch}>
                    search
                </button>
            </div>
        </>
    );
};

export default Search;
