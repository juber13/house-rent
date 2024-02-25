
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { PiCaretDown } from "react-icons/pi";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import Filter from '../Filter/Filter';

import './nav.css';
function Nav() {
  const navigate = useNavigate();
  return (
    <>
      <div className='navbar flex'>
        <div className="logo flex">
          <Link to="/"><MdOutlineRealEstateAgent style={{ fill: "#6F65EB", textDecoration: "none" }} /> Estatery</Link>
          <ul className='list-items'>
            <li className='active' ><Link to="/">Rent</Link></li>
            <li>Buy</li>
            <li>Sell</li>
            <li>ManageProperty <span><PiCaretDown /></span></li>
            <li>Resources <span><PiCaretDown /></span></li>
          </ul>
        </div>
        <div className="btns nav-btn flex_1">
          <button className='btn' onClick={() => navigate("/favourite")}>Favourite</button>
          <button className='btn' style={{ background: "#6f65eb", color: "#fff" }}>Login</button>
        </div>
      </div>
      <Filter />
    </>
  )
}

export default Nav