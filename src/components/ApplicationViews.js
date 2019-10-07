import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import LocationDetail from "./location/LocationDetail";
import AnimalDetail from "./animal/AnimalDetail";

class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/animals"
          render={props => {
            return <AnimalList />;
          }}
        />
        <Route
          path="/animals/:animalId(\d+)"
          render={props => {
            return (
              <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
            );
          }}
        />
        <Route
          path="/locations"
          render={props => {
            return <LocationList {...props} />;
          }}
        />
        <Route
          path="/locations/:locationId(\d+)"
          render={props => {
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
              />
            );
          }}
        />
        <Route
          path="/employees"
          render={props => {
            return <EmployeeList {...props} />;
          }}
        />
        <Route
          path="/owners"
          render={props => {
            return <OwnerList {...props} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
