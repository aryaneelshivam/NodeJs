var exp = require('express')
var app = new exp()

app.use((req,res)=>{
    console.log("request received");
    next();
})

app.get('/', (req,res,next)=>{
    const error = new Error("Router Error")
    error.statusCode = 404
    next(error)
})

app.use((err,req,res,next)=>{
    console.log(err.message)
    res.status(err.statusCode || 500).json({
        
    })
})

app.listen(3000, ()=>{
    console.log("Server started at port 3000")
})