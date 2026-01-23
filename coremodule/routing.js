var httpserve = require('http')
httpserve.createServer((req,res)=>{
    if(req.url == '/home'){
        res.writeHead(200, {"content-type":"text/html"})
        res.write(`<h1>Home Page</h1>`)
        //random function
        function swap(a, b){
            var temp
            temp = a
            a = b
            b = temp
            return[a, b]
        }
        res.write(`${swap(10,20)} \n`)
        res.write(`<a href='/'>Goto Home</a>`)
        res.end()
    }
    else if(req.url == '/profile'){
        res.writeHead(200,{"content-type":"text/html"})
        res.write(`<h1>Profile Page</h1> \n`)
        res.write(`<a href='/'>Goto Home</a>`)
        res.end()
    }
    else{ //routing from root address using <a> tags
        res.write(`<a href='/home'>Home Page</a>
            <br>
            <a href='/profile'>Profile Page</a>`)
        res.end()
    }
}).listen(4000, ()=>{console.log("Server 4000 is running")})