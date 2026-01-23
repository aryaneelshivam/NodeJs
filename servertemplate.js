var server = require('http')
var operate = require('os')
server.createServer((req,res)=>{
    if(req.url == '/home'){ //home page
        res.writeHead(200, {"content-type":"text/html"})
        res.write(`<h1>Home Page</h1>`)
        res.end()
    }
    else if (req.url == '/about'){ //about page
        res.writeHead(200, {"content-type":"text/html"})
        res.write(`<h1>About Page</h1>`)
        res.end()
    }
    else if (req.url == '/contact'){  //contact page
        res.writeHead(200, {"content-type":"text/html"})
        res.write(`<h1>Contact Page</h1>`)
        res.end()
    }
    else{ //root page
        res.writeHead(404, {"content-type":"text/html"})
        res.write(`<h1>404 Page Not Found</h1>`)
        res.end()
    }
}).listen(2000, ()=>console.log("Server running on port 2000"))