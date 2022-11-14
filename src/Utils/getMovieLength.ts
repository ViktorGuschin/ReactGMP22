const getMovieLength = (lengthInMinutes: number) => {
    const hours = Math.floor(lengthInMinutes / 60);
    const minutes = lengthInMinutes % 60;

    return `${hours}h ${minutes}min`;
};

export default getMovieLength;
