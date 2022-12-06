import { configureStore } from '@reduxjs/toolkit';
import movieListReducer from '../Containers/MovieList/movieListSlice';
import deleteMovieModalReducer from '../Components/DeleteMovieModal/deleteMovieModalSlice';
import movieCardReducer from '../Components/MovieCard/movieCardSlice';
import addMovieModalReducer from '../Components/AddMovieModal/addMovieModalSlice';
import editMovieModalReducer from '../Components/EditMovieModal/editMovieModalSlice';

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
        deleteMovieModal: deleteMovieModalReducer,
        addMovieModal: addMovieModalReducer,
        editMovieModal: editMovieModalReducer,
        movieCard: movieCardReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
