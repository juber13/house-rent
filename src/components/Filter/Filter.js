import React from 'react'
import './filter.css'

import { GetMovieContext } from '../context/myContext'
const Filter = () => {
    const state = GetMovieContext();
    const { inputs, setInputs, filterData } = state;
    const handleInput = (e) => {
        const { value, name } = e.target;
        setInputs({ ...inputs, [name]: value });
    }

    return (
        <div className='filter-container'>
            <div className="heading">
                <h2 style={{ fontWeight: "bold" }}>Search property for rent</h2>
            </div>

            <div className="filters">
                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" placeholder='Location' name='city' onInput={handleInput} />
                </div>

                <div>
                    <label htmlFor="when">When</label>
                    <input type="date" onInput={handleInput} name='when' />
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <select onInput={handleInput} name='price'>
                        <option hidden selected value="">options</option>
                        <option value="1000">500 - 1000</option>
                        <option value="2000">1500 - 2000</option>
                        <option value="3000">2000 - 3000</option>
                        <option value="4000">300 - 5000</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="type">Property Type</label>
                    <select onInput={handleInput} name='type'>
                        <option hidden selected value="">options</option>
                        <option value="all house">All House</option>
                        <option value="all villa">Villa</option>
                        <option value="all pg">All PG</option>
                        <option value="all oyo">Oyo</option>
                        <option value="all farm-house">Farm House</option>
                        <option value="all hotel">Hotel</option>
                    </select>
                </div>

                <div>
                    <button className='btn filter-btn' onClick={filterData}>Search</button>
                </div>

            </div>
        </div>
    )
}

export default Filter