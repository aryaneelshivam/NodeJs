var exp = require('express')
var obj = new exp()
var path = require('path')
var filepath = path.join(__dirname, '/public')
obj.use(exp.static(filepath))
obj.use(exp.urlencoded({extended:true}))
obj.use(exp.json())

obj.post('/register', (req,res)=>{
    var data = req.body
    res.send(data)
})

obj.listen(3000,()=>{
    console.log("Server started at port 3000")
})

