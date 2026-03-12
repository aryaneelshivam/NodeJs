var exp = require('express')
var app = new exp()
var fs = require('fs')
var encoded = exp.urlencoded({extended:true})
app.get('/auth', (req,res)=>{
    res.sendFile(__dirname + "/auth.html")
})

app.post('/auth', encoded, (req,res)=>{
    var username = req.body.username
    var password = req.body.password
    if(username == "aryaneel" && password == "admin"){
        res.send("Login successful")
    }
    else{
        res.send("Login failed")
    }
})

app.listen(8000, ()=>{
    console.log("server running at port 8000")
})