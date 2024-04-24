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

function getWeatherCondition(wmoCode) {
  const conditions = new Map([
    [[0], "Sunny"],
    [[1], "Partly Cloudy"],
    [[2], "Partly Sunny"],
    [[3], "Cloudy"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "Sun and Rain"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "Rainy"],
    [[71, 73, 75, 77, 85, 86], "Snowy"],
    [[95], "Lightning"],
    [[96, 99], "Heavy Rain"],
  ]);

  const arr = [...conditions.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return conditions.get(arr);
}

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}

class WeatherPage extends React.Component {
  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weatherData;

    return (
      <div className="weather-wrapper">
        <div className="btn">
          <button>Add +</button>
        </div>
        <div className="location">
          <h1>{this.props.displayLocation}</h1>
        </div>
        <div className="datas">
          <span className="icon">{getWeatherIcon(codes.at(0))}</span>
          <p>
            <span>H: {Math.ceil(max.at(0))} &deg; </span>
            <span>L: {Math.floor(min.at(0))} &deg;</span>
          </p>
          <p>{getWeatherCondition(codes.at(0))}</p>
        </div>
        <div>
          <ul className="weather">
            {dates.map((date, i) => (
              <Day
                date={date}
                max={max.at(i)}
                min={min.at(i)}
                code={codes.at(i)}
                key={date}
                isToday={i === 0}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

class Day extends React.Component {
  render() {
    const { date, max, min, code, isToday } = this.props;
    return (
      <li className="day">
        <span>{getWeatherIcon(code)}</span>
        <p>{isToday ? "Today" : formatDay(date)}</p>
        <p>
          {Math.floor(min)} &deg; &mdash;
          <strong>{Math.ceil(max)} &deg;</strong>
        </p>
      </li>
    );
  }
}
export default WeatherPage;
