import React, { useState, createContext, useContext, useMemo } from 'react';


import { data } from '../../data.js'
const movieContext = createContext({});

const MyContext = ({ children }) => {
    const memoizedData = useMemo(() => data, [])
    const [houses, setHouse] = useState([...memoizedData]);
    const [favourite, setFavourite] = useState([]);
    const [inputs, setInputs] = useState({ city: "", when: "", price: "", type: "" });

    // filter out 

    const filterData = () => {
        const { city, price, type, when } = inputs;
        if (!city || !when || !price || !type) {
            alert("all fields are required");
            return;
        } else {
            console.log(houses)
            console.log(city, price, type)
            const newHouses = houses.filter(house =>
                house.city.toLowerCase() === city.toLowerCase() ||
                house.type.toLowerCase() === type.toLowerCase() ||
                house.price <= Number(price)
            );
            setHouse(newHouses);
        }

    }

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
        <movieContext.Provider value={{ houses, filterData, favourite, setHouse, setFavourite, handleFavourite, removeFavourite, inputs, setInputs }}>
            {children}
        </movieContext.Provider>
    )
}

export const GetMovieContext = () => {
    const ctx = useContext(movieContext);
    return ctx;
}

export default MyContext