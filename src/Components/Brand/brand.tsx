import React from 'react';

import styles from './brand.module.scss';

const Brand: React.FunctionComponent = () => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.first}>netflix</span>
            <span>roulette</span>
        </div>
    );
};

export default Brand;
