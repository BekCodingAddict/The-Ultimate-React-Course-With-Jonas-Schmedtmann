import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "Seoul" };
    this.fetchWeater = this.fetchWeater.bind(this);
  }

  fetchWeater() {
    console.log("Loading data...");
    console.log(this);
  }
  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <input
            type="text"
            placeholder="Search from location..."
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>
        <button onClick={this.fetchWeater}>Get Weather</button>
      </div>
    );
  }
}

export default App;
