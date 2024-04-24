import React from "react";
import "./App.css";
import Header from "./Header";
import Location from "./Locations";
import WeatherPage from "./WeatherPage";
import { Route, Routes } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
      weather: {},
      location: "",
      weatherList: [],
    };
  }

  handleInputFocus = () => {
    this.setState({ isFocus: true });
  };
  handleInputBlur = () => {
    this.setState({ isFocus: false });
  };

  setWeather = (obj) => {
    this.setState({ weather: obj });
  };

  setLocation = (str) => {
    this.setState({ location: str });
  };

  addWeatherList = (obj) => {
    this.setState({ weatherList: [...this.state.weatherList, obj] });
    console.log(this.state.weatherList);
  };

  render() {
    return (
      // <WeatherPage />
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Header
                onBlur={this.handleInputBlur}
                onFocus={this.handleInputFocus}
                setWeather={this.setWeather}
                setLocation={this.setLocation}
              />
              {this.state.weatherList.map((currWeather, i) => (
                <Location
                  key={currWeather.time[i]}
                  displayLocation={this.state.location}
                  currWeather={currWeather}
                  isFocus={this.state.isFocus}
                />
              ))}
            </div>
          }
        />
        <Route
          path="/weather-page"
          element={
            <WeatherPage
              weatherData={this.state.weather}
              displayLocation={this.state.location}
              addWeatherList={this.addWeatherList}
            />
          }
        />
      </Routes>
    );
  }
}

export default App;
