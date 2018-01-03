interface Human {
  firstName: string
  lastName: string
  name?: Function
  isLate?(time: Date): Function
}

class Person implements Human {
  constructor (public firstName, public lastName) {
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

  test () {
    console.log(this.firstName)
  }
}

let alex = new Student('Alex', 'Kibler', 'Angular 5')

console.log(alex.whoAreYou())
