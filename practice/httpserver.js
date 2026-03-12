var http = require('http')
http.createServer((req,res)=>{
    if(req.url == "/"){
        res.writeHead(200, {"content-type":"text/html"})
        res.write("<h1>Home Page</h1>")
    }
    else if(req.url == "/about"){
        res.writeHead(200, {"content-type":"text/html"})
        res.write("<h1>About Page</h1>")
    }
}).listen(3000, ()=>{console.log("server running in port: 3000")})