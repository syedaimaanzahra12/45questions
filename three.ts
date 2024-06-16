// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let nameOfPerson = "sara"
console.log("In Lowercase:" + nameOfPerson.toLowerCase())
console.log("In Uppercase:" + nameOfPerson.toUpperCase())
console.log("In Titlecase:" + nameOfPerson[0].toUpperCase()+nameOfPerson.slice(1).toLowerCase())