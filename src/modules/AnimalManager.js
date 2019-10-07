const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/animals`).then(result => result.json());
  },
  getAllLocation() {
    return fetch(`${remoteURL}/locations`).then(result => result.json());
  },
  getAllEmployee() {
    return fetch(`${remoteURL}/employees`).then(result => result.json());
  },
  getAllOwner() {
    return fetch(`${remoteURL}/owners`).then(result => result.json());
  },
  delete(id) {
    return fetch(`http://localhost:5002/animals/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
  dischargeEmployees(id) {
    return fetch(`http://localhost:5002/employees/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
  removeOwner(id) {
    return fetch(`http://localhost:5002/owners/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  },
  removeLocation(id) {
    return fetch(`http://localhost:5002/locations/${id}`, {
      method: "DELETE"
    }).then(result => result.json());
  }
};
