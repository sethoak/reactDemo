import React, { Component } from "react";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h2>
            Name:{" "}
            <span className="card-locationname">{this.props.local.name}</span>
          </h2>
        </div>
      </div>
    );
  }
}

export default LocationCard;
