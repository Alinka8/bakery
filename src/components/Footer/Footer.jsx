import React from "react";
import "./Footer.css";
import trendy_logo from "../../assets/trendy-logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="img">
          <img src={trendy_logo} alt="logo" className="logo" />
        </div>
        <p>
          Contact us at: <a href="trendy.com">trendydesserts@gmail.com</a>
        </p>
        <p>Address: Ala-Archa 1 floor</p>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Trendy desserts. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
