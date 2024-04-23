import React from "react";
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
            <h2>Location Name</h2>
            <p>00 &deg;</p>
          </div>
        </div>

        <div className="info2">
          <div>
            <p>The Weather Conditions</p>
            <p>
              <span>H:00 &deg;</span> <span>L:00 &deg;</span>
            </p>
          </div>

          <div className="icon">
            <span>🌩️</span>
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
