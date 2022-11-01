import React from 'react';

import Navigation from '../../Components/Navigation';
import Sorting from '../../Components/Sorting';
import styles from './mainNavigation.module.scss';

const MainNavigation: React.FunctionComponent = () => {
    return (
        <div className={styles.wrapper}>
            <Navigation />
            <Sorting />
        </div>
    );
};

export default MainNavigation;
