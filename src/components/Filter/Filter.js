import React from 'react'
import './filter.css'
const Filter = () => {
    return (
        <div className='filter-container'>
            <div className="heading">
                <h2 style={{ fontWeight: "bold" }}>Search property for rent</h2>
            </div>

            <div className="filters">
                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" placeholder='Location' />
                </div>

                <div>
                    <label htmlFor="date">When</label>
                    <input type="date" />
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <select>
                        <option value="1000">500 - 1000</option>
                        <option value="2000">1500 - 2000</option>
                        <option value="3000">2000 - 3000</option>
                        <option value="4000">300 - 5000</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="type">Property Type</label>
                    <select>
                        <option value="house">House</option>
                        <option value="Rent">Rent</option>
                        <option value="PG">PG</option>
                        <option value="Hotel">Hotel</option>
                    </select>
                </div>

                <div>
                    <button className='btn filter-btn'>Search</button>
                </div>

            </div>
        </div>
    )
}

export default Filter