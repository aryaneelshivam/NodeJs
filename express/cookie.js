var exp = require('express')
var cookies = require('cookie-parser')
var app = exp()

app.use(cookies())

app.get('/', (req,res)=>{
    res.cookie('name', 'aryaneel')
    res.send("Cookie set")
})

app.listen(3000, ()=>{
    console.log("Server started at port 3000")
})
