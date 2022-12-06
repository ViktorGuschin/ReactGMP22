import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MovieCardArgs } from '../../Models';
import client from '../../Utils/client';

export type EditMovieModalType = {
    loading: boolean;
    success: boolean;
    movie: MovieCardArgs | null;
};
const initialState: EditMovieModalType = {
    loading: true,
    success: false,
    movie: null,
};

export const editMovie = createAsyncThunk('editMovieModal/editMovie', async (movie: MovieCardArgs) => {
    const response: { data: MovieCardArgs } = await client.put(`/movies`, movie);
    return response.data;
});

const editMovieModalSlice = createSlice({
    name: 'editMovieModal',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(editMovie.pending, state => {
                state.loading = true;
            })
            .addCase(editMovie.fulfilled, (state, action) => {
                state.movie = action.payload;
                state.loading = false;
                state.success = true;
            })
            .addCase(editMovie.rejected, state => {
                state.movie = null;
                state.loading = false;
                state.loading = false;
            });
    },
});

export default editMovieModalSlice.reducer;
