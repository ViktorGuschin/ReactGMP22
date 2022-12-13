import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './Containers/App';
import ErrorPage from './error-page';
import store from './Store/store';
import AppProvider from './Contexts/appContext';
import ErrorBoundary from './Containers/ErrorBoundary';

const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: '/search/:searchQuery',
        element: <App />,
    },
    {
        path: '/search',
        element: <App />,
    },
    {
        path: '/',
        element: <Navigate replace to="/search" />,
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppProvider>
                <ErrorBoundary>
                    <RouterProvider router={router} fallbackElement={<App />} />
                </ErrorBoundary>
            </AppProvider>
        </Provider>
    </React.StrictMode>,
);
