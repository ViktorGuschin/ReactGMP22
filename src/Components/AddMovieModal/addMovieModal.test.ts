import addMovieModalReducer, { AddMovieModalType, addMovie } from './addMovieModalSlice';
import { AddMovieCardArgs } from '../../Models';

jest.mock('../../Utils/client');

describe('Test addMovieModal Reducer', () => {
    const initialState: AddMovieModalType = {
        loading: true,
        success: false,
        movie: null,
    };

    it('should return the initial state', () => {
        const state = addMovieModalReducer(undefined, {
            type: undefined,
        });
        expect(state).toEqual(initialState);
    });

    describe('should handle addMovie', () => {
        it('sets loading true when addMovie is pending', () => {
            const action = { type: addMovie.pending.type };
            const state = addMovieModalReducer(initialState, action);
            expect(state).toEqual({
                loading: true,
                success: false,
                movie: null,
            });
        });

        it('sets the id and list when addMovie is fulfilled', async () => {
            const movie: AddMovieCardArgs = {
                title: 'Test movie title',
                tagline: 'Test tagline',
                vote_average: 7.7,
                vote_count: 6795,
                poster_path: 'https://test.org/test.jpg',
                overview: 'Test overview',
                release_date: '2016-02-11',
                budget: 150000000,
                revenue: 1023784195,
                runtime: 108,
                genres: ['Animation', 'Adventure', 'Family', 'Comedy'],
            };

            const action = { type: addMovie.fulfilled.type, payload: movie };
            const state = addMovieModalReducer(initialState, action);
            expect(state).toEqual({
                loading: false,
                success: true,
                movie,
            });
        });

        it('sets loading and success false when addMovie is rejected', () => {
            const action = { type: addMovie.rejected.type, payload: { error: 'some error' } };
            const state = addMovieModalReducer(initialState, action);
            expect(state).toEqual({
                loading: false,
                success: false,
                movie: null,
            });
        });
    });
});
