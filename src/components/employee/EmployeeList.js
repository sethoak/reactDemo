import React, { Component } from "react";
//import the components we will need
import EmployeeCard from "./EmployeeCard";
import AnimalManager from "../../modules/AnimalManager";

class EmployeeList extends Component {
  //define what this component needs to render
  state = {
    employees: []
  };

  componentDidMount() {
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    AnimalManager.getAllEmployee().then(employees => {
      this.setState({
        employees: employees
      });
    });
  }

  render() {
    console.log("Employee LIST: Render");

    return (
      <div className="container-cards">
        {this.state.employees.map(employeeCardResult => (
          <EmployeeCard />
        ))}
      </div>
    );
  }
}

export default EmployeeList;
