var exp = require('express')
var obj = new exp()
var encoded = exp.urlencoded({extended:true})

obj.get('/auth', (req,res)=>{
    res.sendFile(__dirname + "/authform.html")
})
obj.post('/auth', encoded, (req,res)=>{
    var username = req.body.username
    var password = req.body.password
    if(username == "admin" && password == "admin"){
        res.send("Login successful")
    }
    else{
        res.send("Login failed")
    }
})
obj.listen(8000,()=>{
    console.log("Server started at port 8000")
})
