import React, { Component } from "react";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Owner: <span className="card-ownernname">Rod</span>
          </h3>
          <h3>
            Owner: <span className="card-ownernname">Todd</span>
          </h3>
          <h3>
            Owner: <span className="card-ownernname">Maude</span>
          </h3>
        </div>
      </div>
    );
  }
}

export default OwnerCard;
