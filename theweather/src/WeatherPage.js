import React from "react";

class WeatherPage extends React.Component {
  render() {
    return (
      <div className="weather-wrapper">
        <div className="btn">
          <button>Add +</button>
        </div>
        <div className="location">
          <h1>Location</h1>
        </div>
        <div className="datas">
          <span className="icon">🌩️</span>
          <p>
            <span>H: 00 &deg;</span>
            <span>L: 00 &deg;</span>
          </p>
          <p>Weather Conditions...</p>
        </div>
        <div></div>
      </div>
    );
  }
}

export default WeatherPage;
