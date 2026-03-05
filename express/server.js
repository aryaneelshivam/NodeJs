var exp = require('express')
var obj = new exp()
var fs = require('fs')
var encoded = exp.urlencoded({extended:true})
obj.get('/upload', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
obj.post('/write', encoded, (req,res)=>{
    var file1 = req.body.f1
    fs.readFile(file1, (err,data)=>{
        if(err){
            res.send("File not found")
        }
        else{
            fs.writeFile('file.txt', data, (err)=>{
                if(err){
                    res.send("File not uploaded")
                }
                else{
                    res.send(`File written successfully and content is <br><br> ${data}`)
                }
            })
        }
    })
    
})

obj.listen(3000,()=>{
    console.log("Server started at port 3000")
})
