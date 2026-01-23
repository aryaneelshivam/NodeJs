var httpserve = require('http')

httpserve.createServer((req,res)=>{
    res.writeHead(200, {"content-type":"text/html"} ) //function to tell browser we have HTML content
    res.write("Hello server response <br>")
    res.write("Aryaneel Hello Bello Mello <br>")
    var a = 10
    res.write(`${a} \n`)
    res.write(`<h1> Hello Bello </h1>`)
    //declaring a function
    function swap(a, b){
        var temp
        temp = a
        a = b
        b = temp
        return[a, b]
    }

    function factorial(a){
        var fact = 1
        for(var i = 1; i <= a; i++){
            fact = fact*i
        }

        return(`The factorial of ${a} is ${fact}`)
    }

    res.write(`function calling ${swap(4,5)} <br>`)
    res.write(`function calling ${factorial(5)}`)

    res.end()
}).listen(3000, ()=>{console.log("Server running open the browser 🏃‍♂️")}) //callbacking console.log for viewing logs