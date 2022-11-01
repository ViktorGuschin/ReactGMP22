import React from 'react';

import Brand from '../../Components/Brand';
import styles from './footer.module.scss';

const Footer: React.FunctionComponent = () => {
    return (
        <div className={styles.wrapper}>
            <Brand />
        </div>
    );
};

export default Footer;
