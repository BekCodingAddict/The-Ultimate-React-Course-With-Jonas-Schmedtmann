import React from "react";
import { getWeatherCondition, getWeatherIcon } from "./WeatherPage";
class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onHover: false,
    };
  }
  render() {
    return (
      <div
        className={`location-wrapper ${this.props.isFocus ? "blur" : ""}`}
        onMouseOver={() => this.setState({ onHover: true })}
        onMouseOut={() => this.setState({ onHover: false })}
      >
        <div className="info">
          <div>
            <h2>{this.props.currWeather.currLocation}</h2>
          </div>
        </div>

        <div className="info2">
          <div>
            <p>{getWeatherCondition(this.props.currWeather.weathercode[0])}</p>
            <p>
              <span>H:{this.props.currWeather.temperature_2m_max[0]}&deg;</span>{" "}
              <span>
                L:{this.props.currWeather.temperature_2m_min[0]} &deg;
              </span>
            </p>
          </div>

          <div className="icon">
            <span>{getWeatherIcon(this.props.currWeather.weathercode[0])}</span>
            {this.state.onHover && (
              <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
