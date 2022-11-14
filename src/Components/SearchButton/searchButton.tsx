import React from 'react';

import styles from './searchButton.module.scss';

const SearchButton: React.FC<{ showSearch: () => void }> = ({ showSearch }) => {
    return <div className={styles.searchButton} onClick={() => showSearch()} />;
};

export default SearchButton;
