import React from 'react';
import { Provider } from 'react-redux';

import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main/main';
import AppProvider from '../../Contexts/appContext';
import ErrorBoundary from '../ErrorBoundary';

import 'normalize.css';

import styles from './app.module.scss';
import store from '../../Store/store';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <AppProvider>
                <ErrorBoundary>
                    <div className={styles.wrapper}>
                        <Header />
                        <Main />
                        <Footer />
                    </div>
                </ErrorBoundary>
            </AppProvider>
        </Provider>
    );
};

export default App;
