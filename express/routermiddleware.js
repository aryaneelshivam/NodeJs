//router level middleware
var exp = require('express')
var obj = new exp()
var router = exp.Router()
var rou1 = (req,res,next)=>{
    console.log("Running for home page only")
    next()
}
var rou2 = (req,res,next)=>{
    console.log("Running for about page only")
    next()
}
router.get('/home', rou1, (req,res)=>{
    res.send("<h1>Home Page</h1>")
})

router.get('/about', rou2, (req,res)=>{
    res.send("<h1>About Page</h1>")
})

obj.use('/admin', router)

obj.listen(5000,()=>{
    console.log("Server started at port 5000")
})

