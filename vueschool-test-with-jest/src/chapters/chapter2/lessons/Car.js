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
  update(id, data) {
    let itemIndex = this.all().findIndex(item => {
      return item.id == id
    });
    if (itemIndex < 0 ) {
      return false;
    }
    this.$collection.splice(
      itemIndex,
      1,
      this.getCopy(data, this.$collection[itemIndex])
    );
  }

  getCopy(entry, origin = {}) {
    return Object.assign(origin, entry);
  }
}