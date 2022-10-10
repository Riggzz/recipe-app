import React from "react";
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h2 className="title">Devmountain Eatery</h2>
      <nav>
          <NavLink to="">
          <button id="home" className="home">Home</button>
          </NavLink>
          <NavLink to="/newRecipe">
          <button className="newRecipe">Add Recipe</button>
          </NavLink>
      </nav> 
    </header>
  );
};

export default Header;
