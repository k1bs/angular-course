class Person {
  firstName = ''
  lastName = ''

  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  name () {
    return `${this.firstName} ${this.lastName}`
  }

  whoAreYou () {
    return `Hi, I'm ${this.name()}`
  }
}

class Student extends Person {
  course = ''

  constructor (firstName, lastName, course) {
    super(firstName, lastName)
    this.course = course
  }

  whoAreYou () {
    return `${super.whoAreYou()} and I'm studying ${this.course}`
  }
}

let alex = new Student('Alex', 'Kibler', 'Angular 5')

console.log(alex.whoAreYou())
