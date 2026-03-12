var exp = require('express')
var app = new exp()
var encoded = exp.urlencoded({extended:true})
var fs = require('fs')

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/auth.html")
})

app.post('/auth', encoded, (req,res)=>{
    var username = req.body.username
    var password = req.body.password
    if(username == "admin" && password == "admin"){
        app.get('/index', (req,res)=>{
            res.sendFile(__dirname + "/index.html")
        })
    } else{
         app.get('/index', (req,res)=>{
            res.sendFile(__dirname + "/index.html")
        })
    }
})

app.listen(8000, ()=>{console.log("server running at port: 8000")})