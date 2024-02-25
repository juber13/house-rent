import React, { useState, createContext, useContext } from 'react';


import { data } from '../../data.js'
const movieContext = createContext({});

const MyContext = ({ children }) => {
    const [houses, setHouse] = useState([...data]);
    const [favourite, setFavourite] = useState([]);

    const handleFavourite = (movie) => {
        const isFound = favourite.some(item => {
            if (item.name === movie.name) return true;
            else return false;
        })

        if (!isFound) {
            const newFaveurite = [...favourite, movie];
            setFavourite(newFaveurite);
        }
    }


    const removeFavourite = (movie) => {
        const newFavourite = favourite.filter((favo) => favo.name !== movie.name);
        setFavourite(newFavourite);
    }

    return (
        <movieContext.Provider value={{ houses, favourite, setHouse, setFavourite, handleFavourite, removeFavourite }}>
            {children}
        </movieContext.Provider>
    )
}

export const GetMovieContext = () => {
    const ctx = useContext(movieContext);
    return ctx;
}

export default MyContext