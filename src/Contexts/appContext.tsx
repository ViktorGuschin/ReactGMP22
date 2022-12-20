import React, { useMemo, useState } from 'react';
import useToggle from '../Hooks/useToggle';
import { MovieCardArgs } from '../Models';

export type AppContextType = {
    activeMovie: MovieCardArgs | null;
    showAddMovieModal: boolean;
    showHeaderSearch: boolean;
    showMovieDetail: boolean;
    setActiveMovie: React.Dispatch<React.SetStateAction<MovieCardArgs>>;
    setShowAddMovieModal: () => void;
    setShowHeaderSearch: React.Dispatch<React.SetStateAction<boolean>>;
    setShowMovieDetail: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const [showAddMovieModal, setShowAddMovieModal] = useToggle(false);
    const [showHeaderSearch, setShowHeaderSearch] = useState(true);
    const [showMovieDetail, setShowMovieDetail] = useState(false);
    const [activeMovie, setActiveMovie] = useState<MovieCardArgs>(null);

    const value = useMemo(
        () => ({
            activeMovie,
            showAddMovieModal,
            showHeaderSearch,
            showMovieDetail,
            setActiveMovie,
            setShowAddMovieModal,
            setShowHeaderSearch,
            setShowMovieDetail,
        }),
        [
            activeMovie,
            showAddMovieModal,
            showHeaderSearch,
            showMovieDetail,
            setActiveMovie,
            setShowAddMovieModal,
            setShowHeaderSearch,
            setShowMovieDetail,
        ],
    );

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
