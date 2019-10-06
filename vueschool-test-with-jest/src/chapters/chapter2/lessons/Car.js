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
  find(name) {
    let item = this.all().find(item => {
      return item.id == name
    });
    return item ? this.getCopy(item) : null;
  }
  all() {
    return this.$collection.map(entry => this.getCopy(entry));
  }
  update() {}
  getCopy(entry) {
    return Object.assign({}, entry);
  }
}