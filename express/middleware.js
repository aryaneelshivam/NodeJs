//application level middleware 
var exp = require('express')
var obj = new exp()

//middleware creation first way
var log = (req,res,next)=>{
    console.log("first security check")
    console.log(req.method)
    next()
}

obj.use(log)

//2nd way
obj.use((req, res, next)=>{
    console.log("second security check")
    console.log(req.url)
    next()
})

obj.get('/', (req,res)=>{
    res.send(`<h1>Application level middleware</h1>`)
})
obj.listen(3000,()=>{
    console.log("Server started at port 3000")
})