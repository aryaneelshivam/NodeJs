var exp = require('express')
var app = new exp()

const myLogger = (req,res,next)=>{
    console.log("Before logged")
    next()
    console.log("After logged")
}

app.use(myLogger)

app.get('/', (req,res)=>{
    console.log("Welcome")
    res.send("Welcome")
})

app.listen(3000, ()=>{
    console.log("Server started at port 3000")
})
