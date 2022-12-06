import { createAction, createSlice } from '@reduxjs/toolkit';
import { MovieCardArgs } from '../../Models';

export type DeleteMovieModalType = {
    entity: MovieCardArgs | null;
};
const initialState: DeleteMovieModalType = {
    entity: null,
};

export const setActiveMovie = createAction('movieCard/setActiveMovie', (entity: MovieCardArgs) => ({
    payload: entity,
}));
export const clearActiveMovie = createAction('movieCard/clearActiveMovie');

const movieCardSlice = createSlice({
    name: 'movieCard',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(setActiveMovie, (state, action) => {
                state.entity = action.payload;
            })
            .addCase(clearActiveMovie, state => {
                state.entity = null;
            });
    },
});

export default movieCardSlice.reducer;
