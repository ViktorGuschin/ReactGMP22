import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main/main';
import ErrorBoundary from '../ErrorBoundary';
import 'normalize.css';
import styles from './app.module.scss';

const App: React.FunctionComponent = () => {
    return (
        <ErrorBoundary>
            <div className={styles.wrapper}>
                <Header />
                <Main />
                <Footer />
            </div>
        </ErrorBoundary>
    );
};

export default App;
