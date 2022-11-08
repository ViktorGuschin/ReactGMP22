import React, { useState } from 'react';

import { SubmitHandler } from 'react-hook-form';
import Brand from '../../Components/Brand';
import AddMovieButton from '../../Components/AddMovieButton';
import Search from '../../Components/Search/search';
import AddMovieModal, { Inputs } from '../../Components/AddMovieModal/addMovieModal';
import styles from './header.module.scss';

const Header: React.FunctionComponent = () => {
    const [showAddMovieModal, setShowAddMovieModal] = useState(false);

    const submitForm: SubmitHandler<Inputs> = (_data, e) => {
        e.target.reset();
    };

    return (
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
    );
};

export default Header;
