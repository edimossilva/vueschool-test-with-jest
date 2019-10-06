export default class User {
  constructor(details) {
    const { firstName, lastName } = details;
    this.firstName = firstName;
    this.lastname = lastName;
  }
  get name() {
    return `${this.firstName} ${this.lastname}`
  }
}
