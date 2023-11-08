import React from "react";
import "./Home.css";
import search from "../Assets/search.png";
import cloud from "../Assets/cloud.png";
import humidity_icon from "../Assets/humidity.png";
import wind_icon from "../Assets/wind.png";

function Home() {
  return (
    <div className="container">
      <div className="top_bar">
        <input type="text" className="city_input" placeholder="search" />
        <div className="search-icon">
          <img src={search} alt="" />
        </div>
      </div>
      <div className="weather_icon">
        <img src={cloud} className="cloud" alt="" />
      </div>
      <div className="weather_temp">
        24<sup>o</sup>C
      </div>
      <div className="weather_location">London</div>
      <div className="data_container">
        {/* ELEMENTS */}

        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity_percent">70%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity_percent">14 Km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
