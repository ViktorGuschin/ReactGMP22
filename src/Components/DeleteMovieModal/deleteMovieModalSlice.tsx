import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import client from '../../Utils/client';

export type DeleteMovieModalType = {
    loading: boolean;
    success: boolean;
};
const initialState: DeleteMovieModalType = {
    loading: true,
    success: false,
};

export const deleteMovie = createAsyncThunk('deleteMovieModal/deleteMovie', async (id: number) => {
    const response: { data: string | null } = await client.delete(`/movies/${id}`);
    return response.data;
});

const deleteMovieModalSlice = createSlice({
    name: 'deleteMovieModal',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(deleteMovie.pending, state => {
                state.loading = true;
            })
            .addCase(deleteMovie.fulfilled, state => {
                state.loading = false;
                state.success = true;
            })
            .addCase(deleteMovie.rejected, state => {
                state.loading = false;
                state.loading = false;
            });
    },
});

export default deleteMovieModalSlice.reducer;
