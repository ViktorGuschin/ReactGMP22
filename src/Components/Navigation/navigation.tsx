import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './navigation.module.scss';
import useAppDispatch from '../../Hooks/useAppDispatch';
import { filterMoviesByGenre, loadMovies } from '../../Containers/MovieList/movieListSlice';

const Navigation: React.FunctionComponent = () => {
    const [filter, setFilter] = useState('all');
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const navItems: string[] = useMemo(() => ['all', 'documentary', 'comedy', 'horror', 'crime'], []);

    const handleOnFilter = item => {
        setFilter(item);
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('genre', item);
        setSearchParams(newSearchParams);
    };

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
                        <li
                            key={item}
                            className={`${styles.navItem}${filter === item ? ' ' + styles.active : ''}`}
                            value={item}
                            onClick={() => handleOnFilter(item)}>
                            <div>{item}</div>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
