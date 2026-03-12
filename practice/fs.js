var fs = require('fs')
const filename = "new.txt"
fs.writeFileSync(filename, "Hello World!")
//read the file
var Content = fs.readFileSync(filename, "utf-8")
console.log(Content)

fs.appendFileSync(filename, " Appended text")

//read the second time
var content2 = fs.readFileSync(filename, "utf-8")
console.log(content2)

fs.unlinkSync(filename)

