import React, { Component } from "react";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h2>
            Name:{" "}
            <span className="card-locationname">
              {this.props.location.name}
            </span>
          </h2>
        </div>
        <button
          type="button"
          onClick={() => this.props.deleteLocation(this.props.location.id)}
        >
          Remove Location
        </button>
      </div>
    );
  }
}

export default LocationCard;
