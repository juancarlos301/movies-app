import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {

    const viewLocalStorage = localStorage.getItem('favorites');
    let parsedView;

    if (!viewLocalStorage) {
        localStorage.setItem('favorites', JSON.stringify([]))
        parsedView = []
    } else {
        parsedView = JSON.parse(viewLocalStorage)
    }

    const [favorites, setFavorites] = useState(parsedView)

    return (
        <AppContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </AppContext.Provider>
    )
}

export {
    AppContext
}