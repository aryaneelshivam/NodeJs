const fs = require("fs")
const filename = "example.txt"

fs.writeFileSync(filename, "Hello World")
console.log("File written successfully")

const readfile = fs.readFileSync(filename, "utf-8")
console.log("File read successfully", readfile)

fs.appendFileSync(filename, "Hello World")
console.log("File appended successfully")

fs.unlinkSync(filename)
console.log("File deleted successfully")
