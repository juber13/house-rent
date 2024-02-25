import React from 'react';
import { GetMovieContext } from '../context/myContext';
import { CiHeart } from "react-icons/ci";


const Favourites = () => {
  const data = GetMovieContext();
  const { favourite, removeFavourite } = data;
  return (
    <>
      <div className="houseList">
        {!favourite.length && <h3>No Favourite List Here!!</h3>}
        {favourite.map((favo, index) => {
          return (
            <>
              <div className="house" key={index}>
                <img src={favo.image} alt="movie" />
                <div className="title">
                  <div className="house-title flex">
                    <p>{favo.name}</p>
                    <small style={{ fontSize: "1.5rem", cursor: "pointer" }} 
                    onClick={() => removeFavourite(favo)}> <CiHeart /> </small>
                  </div>
                  <p>{favo.address}{" "}{favo.city}</p>
                  <small style={{ color: "green" }}>Price {favo.price}</small>
                </div>

                <div className="details flex">
                  <p>Area {favo.info.area}</p>
                  <p>Bed {favo.info.bed}</p>
                  <p>favo {favo.info.bathrooms}</p>
                </div>

              </div>
            </>
          );
        })}

      </div>
    </>
  );
}

export default Favourites

