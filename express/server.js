var exp = require('express')
var obj = new exp()
obj.get('/',(req,res)=>{
    res.send("hello")
})

obj.get('/home',()=>{
    res.sendFile(__dirname + '/index.html')
})


obj.listen(3000,()=>{
    console.log("server started at port 3000")
})