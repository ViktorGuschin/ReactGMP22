import React from 'react';

import styles from './navigation.module.scss';

const Navigation: React.FunctionComponent = () => {
    const navItems: string[] = ['all', 'documentary', 'comedy', 'horror', 'crime'];
    return (
        <nav>
            <ul className={styles.nav}>
                {navItems.map(item => {
                    return (
                        <li key={item} className={styles.navItem} value={item}>
                            <div>{item}</div>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
