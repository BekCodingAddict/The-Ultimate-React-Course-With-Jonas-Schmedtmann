import React from "react";
import "./App.css";
import Header from "./Header";
import Location from "./Locations";
import WeatherPage from "./WeatherPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
    };
  }

  handleInputFocus = () => {
    this.setState({ isFocus: true });
  };
  handleInputBlur = () => {
    this.setState({ isFocus: false });
  };

  render() {
    return (
      <div className="container">
        <Header onBlur={this.handleInputBlur} onFocus={this.handleInputFocus} />
        <Location isFocus={this.state.isFocus} />
        <Location isFocus={this.state.isFocus} />
      </div>
      // <WeatherPage />
    );
  }
}

export default App;
