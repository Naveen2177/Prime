import React from "react";
import '../styles/navbar.css'
import Categories from "../pages/categories";

import Logo from "../images/Logo-min.png";

const Navbar = () => {
  return (
    <div className="head d-flex">
      <div className="n1 fw-bold ">
        <ul className="n2 d-flex gap-5 p-2">

          <li >
            <a>
              <img src={Logo} alt="img" style={{ width: "130px" }}/>
            </a>
          </li>

          <li className="list-unstyled dropdown nav-item">
            <a href="#" className="text-white-50 dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">Home</a>
            <ul className="dropdown-menu tog" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">All</a></li>
            <li><a className="dropdown-item" href="#">Movies</a></li>
            <li><a className="dropdown-item" href="#">Tv Shows</a></li>
          </ul>
          </li>

          <li >
            <a href="#" className="text-white-50 dropdown-toggle nva-link" data-bs-toggle="dropdown" aria-expanded="false">Store</a>
            <ul className="dropdown-menu tog" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">All</a></li>
            <li><a className="dropdown-item" href="#">Rent</a></li>
            <li><a className="dropdown-item" href="#">Channels</a></li>
          </ul>
          </li>

          <li >
            <a href={'Categories'} className="text-white-50 dropdown-toggle nva-link">Categories</a>
          </li>

          <li >
            <a href="#" className="text-white-50 dropdown-toggle nva-link" data-bs-toggle="dropdown" aria-expanded="false">My Stuff</a>
            <ul className="dropdown-menu tog" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">All</a></li>
            <li><a className="dropdown-item" href="#">Watchlist</a></li>
            <li><a className="dropdown-item" href="#">Rentals</a></li>
          </ul>
          </li>
        </ul>
      </div>

    <div>
      <div className="d-flex">

      <div className="icon">
     <a href="#">
     <i class="fa-solid fa-magnifying-glass fa-xl"></i>
     </a>
      </div>

          <div className="icon1">
          <a href="#">
          <i class="fa-regular fa-circle-user fa-2xl"></i>
          </a>
          </div>
      </div>
    </div>

    </div>
  );
};

export default Navbar;
