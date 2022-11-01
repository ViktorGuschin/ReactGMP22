import React from 'react';

import styles from './sorting.module.scss';

const Sorting: React.FunctionComponent = () => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.label}>sort by</span>
            <select className={styles.select}>
                <option value="releaseDate">release date</option>
            </select>
        </div>
    );
};

export default Sorting;
