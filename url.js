var url = require('url')
var http = require('http')
http.createServer((req, res)=>{
    var parsedUrl = url.parse(req.url, true)
    console.log(parsedUrl)
    var name = parsedUrl.query.name
    var city = parsedUrl.query.city
    res.end(`the fetched name and city frm url is ${name} and ${city}`)
}).listen(3000)