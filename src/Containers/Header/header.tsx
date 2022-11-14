import React, { useContext } from 'react';

import { SubmitHandler } from 'react-hook-form';
import Brand from '../../Components/Brand';
import AddMovieButton from '../../Components/AddMovieButton';
import Search from '../../Components/Search/search';
import AddMovieModal, { Inputs } from '../../Components/AddMovieModal/addMovieModal';
import styles from './header.module.scss';
import { AppContext } from '../../Contexts/appContext';
import MovieDetail from '../../Components/MovieDetail';

const Header: React.FunctionComponent = () => {
    const { showAddMovieModal, setShowAddMovieModal, showHeaderSearch, showMovieDetail, activeMovie } =
        useContext(AppContext);

    const submitForm: SubmitHandler<Inputs> = (_data, e) => {
        e.target.reset();
    };

    return (
        <>
            {showHeaderSearch && (
                <div className={styles.wrapper}>
                    <div className={styles.wrapperBrand}>
                        <Brand />
                        <AddMovieButton toggleModal={setShowAddMovieModal} />
                    </div>
                    <div className={styles.wrapperSearch}>
                        <Search />
                    </div>
                    {showAddMovieModal && <AddMovieModal toggleModal={setShowAddMovieModal} submitForm={submitForm} />}
                </div>
            )}
            {showMovieDetail && <MovieDetail activeMovie={activeMovie} />}
        </>
    );
};

export default Header;
