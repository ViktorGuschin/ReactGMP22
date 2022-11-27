import React, { useEffect, useMemo, useState } from 'react';

import styles from './navigation.module.scss';
import useAppDispatch from '../../Hooks/useAppDispatch';
import { filterMoviesByGenre, loadMovies } from '../../Containers/MovieList/movieListSlice';

const Navigation: React.FunctionComponent = () => {
    const [filter, setFilter] = useState('all');
    const dispatch = useAppDispatch();

    const navItems: string[] = useMemo(() => ['all', 'documentary', 'comedy', 'horror', 'crime'], []);

    const handleOnFilter = item => setFilter(item);

    useEffect(() => {
        if (filter === navItems[0]) {
            dispatch(loadMovies());
        } else {
            dispatch(filterMoviesByGenre(filter));
        }
    }, [filter, dispatch, navItems]);

    return (
        <nav>
            <ul className={styles.nav}>
                {navItems.map(item => {
                    return (
                        <li key={item} className={styles.navItem} value={item} onClick={() => handleOnFilter(item)}>
                            <div>{item}</div>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
