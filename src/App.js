import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Header/Nav';
import HouseList from './components/Houses/HouseList'
import Favourites from './components/Favourites/Favourites'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HouseList />} />
        <Route path="/favourite" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;