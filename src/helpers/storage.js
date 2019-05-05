
class storage {
  constructor(keyIn) {
    try {
        this.storage = window.localStorage;
    } catch (e) {
      return undefined;
    }
    this.key = keyIn;
  }
  set(arr) {
    let json = JSON.stringify(arr);
    this.storage.setItem(this.key,json);
  }
  get() {
    let data = this.storage.getItem(this.key);
    return JSON.parse(data);
  }
}

export default storage;
