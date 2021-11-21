import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_okCuIQWmhTzJbN9BSSedDvKkSnpwjgLSQlj34z6I1MLn1vr&s"
        className="header__logo"
      ></img>
      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__lineOne">Hello</span>
          <span className="header__lineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__lineOne">Return</span>
          <span className="header__lineTwo">& Options</span>
        </div>
        <div className="header__option">
          <span className="header__lineOne">Your</span>
          <span className="header__lineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon></ShoppingBasketIcon>
          <span className="header__lineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
