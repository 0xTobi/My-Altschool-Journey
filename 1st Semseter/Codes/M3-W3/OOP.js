class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        console.log("My name is")
    }
    getAge() {
        console.log("My name is")
    }
    getHeight() {
        console.log("My name is")
    }
    getProfession() {
        console.log(this.name)
    }
}

class Teacher extends Person {
    constructor(name) {
        super(name)
    }

    classesToTeach() {
        console.log("I take a,c,d classes")
    }

    yearsOfTeaching() {
        console.log("I have been a teacher for 73 years")
    }
}



class Student extends Person {
    constructor(type) {
        super(type)
    }

    classesToAttend = () => "I attend a,c,d classes"

    expectedGraduationDate = () => "Expected to graduate by 2090"
}



// let tobi = new Person("Professor")
// tobi.getProfession()

let tobi = new Student("Tobi")
console.log(tobi.classesToAttend())

let fuwape = new Teacher("Fuwape")
console.log(fuwape.classesToTeach())
