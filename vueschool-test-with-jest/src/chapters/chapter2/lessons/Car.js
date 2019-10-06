export default class Car {
  constructor(heroes) {
    this.$collection = [];
    if (heroes) {
      this.record(heroes);
    }
  }
  record(newCollection) {
    this.$collection.push(... newCollection);
  }
  find() {}
  all() {
    return this.$collection;
  }
  update() {}
}