import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MovieCardArgs } from '../../Models';
import client from '../../Utils/client';

export type MovieListStateType = {
    loading: boolean;
    entities: MovieCardArgs[];
};
const initialState: MovieListStateType = {
    loading: true,
    entities: [],
};

export const loadMovies = createAsyncThunk('movieList/loadMovies', async () => {
    const response: { data: MovieCardArgs[] } = await client.get('/movies');
    return response.data;
});

export const searchMoviesByTitle = createAsyncThunk('movieList/searchMoviesByTitle', async (text: string) => {
    const response: { data: MovieCardArgs[] } = await client.get(`/movies?search=${text.toLowerCase()}&searchBy=title`);
    return response.data;
});

export const filterMoviesByGenre = createAsyncThunk('movieList/filterMoviesByGenre', async (text: string) => {
    const response: { data: MovieCardArgs[] } = await client.get(`/movies?filter=${text.toLowerCase()}`);
    return response.data;
});

export const sortMovies = createAsyncThunk('movieList/sortMovies', async (text: string) => {
    const response: { data: MovieCardArgs[] } = await client.get(`/movies?sortBy=${text.toLowerCase()}&sortOrder=desc`);
    return response.data;
});

const movieListSlice = createSlice({
    name: 'movieList',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadMovies.pending, state => {
                state.loading = true;
            })
            .addCase(loadMovies.fulfilled, (state, action) => {
                state.entities = action.payload;
                state.loading = false;
            })
            .addCase(searchMoviesByTitle.pending, state => {
                state.loading = true;
            })
            .addCase(searchMoviesByTitle.fulfilled, (state, action) => {
                state.entities = action.payload;
                state.loading = false;
            })
            .addCase(filterMoviesByGenre.pending, state => {
                state.loading = true;
            })
            .addCase(filterMoviesByGenre.fulfilled, (state, action) => {
                state.entities = action.payload;
                state.loading = false;
            })
            .addCase(sortMovies.pending, state => {
                state.loading = true;
            })
            .addCase(sortMovies.fulfilled, (state, action) => {
                state.entities = action.payload;
                state.loading = false;
            });
    },
});

export default movieListSlice.reducer;
