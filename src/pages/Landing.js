import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="JH logo" className="logo" />
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              Job <span>Tracker Web </span>App
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus fuga dolores atque nam qui mollitia sit
              necessitatibus! Quidem, fugiat dolore?
            </p>
            <button className="btn btn-hero">Login/Register</button>
          </div>
          <img src={main} alt="main image" className="img main-img" />
        </div>
      </nav>
    </main>
  );
};

export default landing;
