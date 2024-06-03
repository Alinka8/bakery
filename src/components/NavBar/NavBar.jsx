import React, { useState } from "react";
import logo_light from "../../assets/trendy-logo.png";
import logo_black from "../../assets/trendy-black.png";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toggle_light from "../../assets/night.png";
import toggle_dark from "../../assets/day.png";
import "./NavBar.css";

function NavBar() {
  const [theme, setTheme] = useState("light");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div
      className="navbar"
      style={{ backgroundColor: theme === "dark" ? "initial" : "white" }}
    >
      <img
        src={theme === "light" ? logo_light : logo_black}
        alt="logo"
        className="logo"
      />
      <div
        className="menu-icon"
        onClick={(e) => {
          e.stopPropagation();
          toggleSidebar();
        }}
      >
        <img src={sidebarOpen ? closeIcon : menuIcon} alt="menu toggle" />
      </div>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <img
          src={closeIcon}
          alt="close"
          className="close-icon"
          onClick={(e) => {
            e.stopPropagation();
            toggleSidebar();
          }}
        />
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Order</li>
          <li>About</li>
        </ul>
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt="search icon"
        />
      </div>
      <img
        onClick={toggleTheme}
        src={theme === "light" ? toggle_light : toggle_dark}
        alt="theme toggle"
        className="toggle-icon"
      />
    </div>
  );
}

export default NavBar;
