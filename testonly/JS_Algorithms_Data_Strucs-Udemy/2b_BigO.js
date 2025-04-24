let instructor = {
    firstName: "Kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}
Object.keys(instructor)
// will return ["firstName", "isInstructor", "favoriteNumbers"]

Object.values(instructor)
// will return ["Kelly", "true", "[1,2,3,4]"]

Object.entries(instructor)
// [Array(2), Array(2), Array(2)]
// 0: (2) ['firstName', 'Kelly']
// 1: (2) ['isInstructor', true]
// 2: (2) ['favoriteNumbers', Array(4)]

instructor.hasOwnProperty("firstName")
// Will return true

let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"]