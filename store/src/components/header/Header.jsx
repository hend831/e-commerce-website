import React from "react";
import './header.css'
import {BsFillCartFill}from 'react-icons/bs'


const Header = () => {
  
  return (
    <header className="header">
      <h1 className="header-title">My E-Commerce App</h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item"><a href="#">Home</a></li>
          <li className="header-nav-item"><a href="#prodct">Products</a></li>
          <li  className="header-nav-item" ><a href="#about">About</a></li>
          <li className="header-nav-item"><a href="#contact">Contact</a></li>
          <li className="header-nav-iem"><a href="#car"><BsFillCartFill/></a></li>
        </ul>
      </nav>
      <div className="header-cart">
        <i className="fas fa-shopping-cart"></i>
      </div>
    </header>
  );
};



export default Header;
