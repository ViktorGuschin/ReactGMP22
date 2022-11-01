import React from 'react';

import styles from './search.module.scss';

const Search: React.FunctionComponent = () => {
    return (
        <>
            <h2 className={styles.searchText}>find your movie</h2>
            <div className={styles.searchInputWrapper}>
                <input className={styles.searchInput} type="search" placeholder="What do you want to watch?" />
                <button className={styles.searchButton} type="button">
                    search
                </button>
            </div>
        </>
    );
};

export default Search;
