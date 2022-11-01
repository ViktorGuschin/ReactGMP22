import React from 'react';

import Brand from '../../Components/Brand';
import AddMovieButton from '../../Components/AddMovieButton';
import Search from '../../Components/Search/search';
import styles from './header.module.scss';

const Header: React.FunctionComponent = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperBrand}>
                <Brand />
                <AddMovieButton />
            </div>
            <div className={styles.wrapperSearch}>
                <Search />
            </div>
        </div>
    );
};

export default Header;
