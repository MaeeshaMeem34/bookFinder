import React from "react";
import {Link } from "react-router-dom";

const Navbar = () => {
    return  (
        <div>
            <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo" style={{ marginLeft:20 }}> 
      Book Finder</Link>

      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">My Library</a></li>
        <li><a href="badges.html">Category</a></li>
        <li><a href="collapsible.html">Profile</a></li>
      </ul>
    </div>
  </nav>


        </div>
    )
  };



export default Navbar;













        