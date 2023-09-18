export default class ClassRoom {
  #maxStudentsSize;

  constructor(maxStudentsSize) {
    this.#maxStudentsSize = maxStudentsSize;
  }

  getMaxStudentsSize() {
    return this.#maxStudentsSize;
  }

  setMaxStudentsSize(maxStudentsSize) {
    this.#maxStudentsSize = maxStudentsSize;
  }
}
