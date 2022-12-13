import React from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './searchButton.module.scss';

const SearchButton: React.FC<{ showSearch: () => void }> = ({ showSearch }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = () => {
        showSearch();
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete('movie');
        setSearchParams(newSearchParams);
    };

    return <div className={styles.searchButton} onClick={handleClick} />;
};

export default SearchButton;
