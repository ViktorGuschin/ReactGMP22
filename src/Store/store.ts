import { configureStore } from '@reduxjs/toolkit';
import movieListReducer from '../Containers/MovieList/movieListSlice';

const store = configureStore({
    reducer: {
        movieList: movieListReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
