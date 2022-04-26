let testUnit = `Hello, this is the test of how backticks work
does this happen how I would expect it to?`
let newTest = "just checking how escapes work \\\\, does this\t how about this\nlead to an indented string and a new line?"

console.log(testUnit)
console.log(newTest)
console.log("user" && "nullify")
console.log(null || "fixed")
console.log("found" || "fixed")
console.log("user" && false)
console.log(true && false && "denial")
console.log(false || 0 && true)