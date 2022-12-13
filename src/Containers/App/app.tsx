import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main/main';

import 'normalize.css';

import styles from './app.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
