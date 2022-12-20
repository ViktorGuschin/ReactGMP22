import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// As a basic setup, import your same slice reducers
import movieListReducer from '../Containers/MovieList/movieListSlice';
import deleteMovieModalReducer from '../Components/DeleteMovieModal/deleteMovieModalSlice';
import movieCardReducer from '../Components/MovieCard/movieCardSlice';
import addMovieModalReducer from '../Components/AddMovieModal/addMovieModalSlice';
import editMovieModalReducer from '../Components/EditMovieModal/editMovieModalSlice';

export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        store = configureStore({
            reducer: {
                movieList: movieListReducer,
                deleteMovieModal: deleteMovieModalReducer,
                addMovieModal: addMovieModalReducer,
                editMovieModal: editMovieModalReducer,
                movieCard: movieCardReducer,
            },
            preloadedState,
        }),
        ...renderOptions
    } = {},
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>;
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
