class Student {
  constructor(name, last, age) {
    this.age = age / 2;
    this.name = name;
    this.last = last;
  }

  get getAge() {
    return this.age / 2;
  }
  get getName() {
    return this.name;
  }
  get getLast() {
    return this.last;
  }

  set setAge(age) {
    this.age = age;
  }
  set setLast(last) {
    this.last = last;
  }
  set setName(name) {
    this.name = name;
  }
}

let student1 = new Student("Sinda", "Ben", 14);
console.log(student1.age);
console.log(student1);
