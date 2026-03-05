//if role is admin then allow else block
//else print wrong user and block

var exp = require('express')
var obj = new exp()

var fake = {
    id: 1,
    name: "aryan",
    role: "admin"
}

var auth = (req,res,next)=>{
    if(fake.role == "admin"){
        console.log("Authentication successful")
        next()
    }
    else{
        console.log("Authentication failed")
    }
}

obj.get('/', auth, (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

obj.listen(3000,()=>{
    console.log("Server started at port 3000")
})

