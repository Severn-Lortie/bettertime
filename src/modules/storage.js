class Storage {

  constructor(localStorageObject) {
    this.localStorage = localStorageObject;
  }

  get(id) {
    let rawJSON = this.localStorage.get(id);
    // Return the parsed JSON object
    return JSON.parse(rawJSON);
  }

  set(id, data) {
    // Store a JSON version of the data
    let rawJSON = JSON.parse(data);
    this.localStorage.set(id, rawJSON);
  }
}


export {
  Storage
};
