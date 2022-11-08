import React from 'react';

export const stateHeader = {
    showAddMovieModal: false,
};

export const headerContext = React.createContext(stateHeader);
