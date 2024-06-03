import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <header className="homeContent">
        <h2>Trendy desserts</h2>
        <p>Delicious desserts for everyone!</p>
        <div className="home-btn">
          <a href="#order">
            <button>Order now</button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
