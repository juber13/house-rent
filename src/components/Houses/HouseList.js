import React from "react";
import { nanoid } from "nanoid";
import './house.css'
import { GetMovieContext } from "../context/myContext";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlineCurrencyRupee } from "react-icons/md";
import { FaBed } from "react-icons/fa6";
const HouseList = () => {
  let id = nanoid()
  const data = GetMovieContext();

  const { handleFavourite, houses, favourite, removeFavourite } = data;

  return (
    <div className="houseList" key={id}>
      {houses?.map((house, index) => {
        return (
          <>
            <div className="house" key={index}>
              <img src={house.image} alt="movie" />
              <div className="title">
                <div className="house-title flex">
                  <p>{house.type.slice(3, house.type.length).toUpperCase()}</p>
                  {favourite.some((pro) => pro.name === house.name) ?
                    <small style={{ fontSize: "1rem", cursor: "pointer" }}
                      onClick={() => removeFavourite(house)}>
                      <FaHeart style={{ fill: "red" }} />
                    </small>
                    : <small style={{ fontSize: "1rem", cursor: "pointer" }}
                      onClick={() => handleFavourite(house)}>
                      <CiHeart />
                    </small>
                  }
                </div>
                <p className="flex_1"><small><MdOutlineLocationOn /> {" "}{house.address}{" "}{house.city}</small></p>
                <small style={{ color: "green" }} className="flex_1"><small><MdOutlineCurrencyRupee /></small> {house.price} / day</small>
              </div>

              <div className="details flex">
                <p>Area {house.info.area}</p>
                <p>Bed <FaBed /> {house.info.bed}</p>
                <p>Bathrooms {house.info.bathrooms}</p>
              </div>

            </div>
          </>
        );
      })}

    </div>
  );
};

export default HouseList;
