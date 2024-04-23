import React from "react";

function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}

const convertToFlag = (countryCode) => {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      location: "",
      weather: {},
      geoLocations: [],
    };

    // this.convertToFlag = this.convertToFlag.bind(this);
    // this.fetchWeater = this.fetchWeater.bind(this);
  }

  fetchWeater = async () => {
    if (this.state.location.length < 2) {
      this.setState({ geoLocations: [] });
      return this.setState({ weather: {} });
    }
    try {
      this.setState({ isLoading: true });
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      const geoData = await geoRes.json();
      console.log(geoData);
      if (!geoData.results) throw new Error("Location in not found!");
      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);

      this.setState({ geoLocations: [...geoData.results] });
      console.log(this.state.geoLocations);

      this.setState({
        displayLocation: `${name} ${convertToFlag(country_code)}`,
      });

      // getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      this.setState({ weather: weatherData.daily });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  setLocation = (e) => this.setState({ location: e.target.value });

  componentDidMount() {
    setTimeout(() => {
      this.fetchWeater();
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.location !== this.state.location) {
      this.fetchWeater();
    }
  }

  static getDerivedStateFromProps(props, state) {}
  render() {
    return (
      <header>
        <h1>The Weather</h1>
        <input
          type="text"
          placeholder="🔍 Search for Location"
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          value={this.state.location}
          onChange={this.setLocation}
        />
        <div className="results">
          {this.state.geoLocations.map((currLoc) => (
            <p>{currLoc.name}</p>
          ))}
        </div>
      </header>
    );
  }
}

export default Header;
