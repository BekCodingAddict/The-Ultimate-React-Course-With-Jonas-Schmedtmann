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
    console.log(this.state.weather);
    console.log("App Weather");
  };

  setLocation = (str) => {
    this.setState({ location: str });
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
              <Location isFocus={this.state.isFocus} />
              <Location isFocus={this.state.isFocus} />
            </div>
          }
        />
        <Route
          path="/weather-page"
          element={
            <WeatherPage
              weatherData={this.state.weather}
              displayLocation={this.state.location}
            />
          }
        />
      </Routes>
    );
  }
}

export default App;
