import React, { Component } from "react";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Owner: <span className="card-employeename">Krusty</span>
          </h3>
          <h3>
            Manager: <span className="card-employeename">Nelson</span>
          </h3>
          <h3>
            Co-manager: <span className="card-employeename">Fry</span>
          </h3>
          <h3>
            Employee: <span className="card-employeename">Rusty</span>
          </h3>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
