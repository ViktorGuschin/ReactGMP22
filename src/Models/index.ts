export type AddMovieCardArgs = {
    title?: string;
    tagline?: string;
    vote_average?: number;
    vote_count?: number;
    poster_path?: string;
    overview?: string;
    release_date?: string;
    budget?: number;
    revenue?: number;
    runtime?: number;
    genres?: string[];
};

export type MovieCardArgs = AddMovieCardArgs & {
    id: number;
};
