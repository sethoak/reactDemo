import React, { Component } from "react";

class OwnerCard extends Component {
  render() {
    console.log(this.props.owner);
    return (
      <div className="card">
        <div className="card-content">
          <h2>
            Name:{" "}
            <span className="card-ownername">{this.props.owner.name}</span>
          </h2>
          <p>Phone Number: {this.props.owner.phoneNumber}</p>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
