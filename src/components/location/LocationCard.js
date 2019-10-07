import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <Link to={`/locations/${this.props.location.id}`}>
          <button>Details</button>
        </Link>

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
