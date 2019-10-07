import React, { Component } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./LocationDetails.css";

class LocationDetail extends Component {
  state = {
    name: "",
    phone: ""
  };

  componentDidMount() {
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.getAllLocation(this.props.locationId).then(location => {
      this.setState({
        name: location.name,
        phone: location.phone
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Name:{" "}
            <span style={{ color: "darkslategrey" }}>{this.state.name}</span>
          </h3>
          <p>Phone: {this.state.phone}</p>
        </div>
      </div>
    );
  }
}

export default LocationDetail;
