const remoteURL = "http://localhost:5002";

export default {
  getAnimal(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json());
  },
  getAll() {
    return fetch(`${remoteURL}/animals`).then(result => result.json());
  }
};
