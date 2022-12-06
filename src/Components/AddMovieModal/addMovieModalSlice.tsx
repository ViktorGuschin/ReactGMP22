import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AddMovieCardArgs, MovieCardArgs } from '../../Models';
import client from '../../Utils/client';

export type AddMovieModalType = {
    loading: boolean;
    success: boolean;
    movie: MovieCardArgs | null;
};
const initialState: AddMovieModalType = {
    loading: true,
    success: false,
    movie: null,
};

export const addMovie = createAsyncThunk('addMovieModal/addMovie', async (movie: AddMovieCardArgs) => {
    const response: { data: MovieCardArgs } = await client.post(`/movies`, movie);
    return response.data;
});

const addMovieModalSlice = createSlice({
    name: 'addMovieModal',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(addMovie.pending, state => {
                state.loading = true;
            })
            .addCase(addMovie.fulfilled, (state, action) => {
                state.movie = action.payload;
                state.loading = false;
                state.success = true;
            })
            .addCase(addMovie.rejected, state => {
                state.movie = null;
                state.loading = false;
                state.loading = false;
            });
    },
});

export default addMovieModalSlice.reducer;
