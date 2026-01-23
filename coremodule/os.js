var operate = require('os')
var http = require('http')
http.createServer((req,res)=>{
    res.write(`The system architecture is ${operate.arch} \n`)
    res.write(`The total memory is ${operate.totalmem} \n`)
    res.write(`The free memory is ${operate.freemem} \n`)
    res.write(`The available parrelism is ${operate.availableParallelism} \n`)

    res.end()
}).listen(5000, ()=>{console.log('Server port 5000 started and running')})