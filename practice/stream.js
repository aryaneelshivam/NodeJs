var fs = require('fs')
const flename = "sample.txt"
var data = ""
var reader = fs.createReadStream(filename)

reader.setEncoding("utf-8")

reader.on('data',(chunk)=>{
    data+=chunk
})

reader.on('end',()=>{
    console.log("reading done")
    console.log(data)
})

reader.on('error',()=>{
    console.log("error")
})

var writer = fs.createWriteStream(filename)
var data = "Something long..."
writer.write(data, ()=>{
    console.log("finishd writing")
})
writer.end()

writer.on('finish', ()=>{
    console.log("Writer finished and mem flushed")
})

writer.on('error', ()=>{
    console.log("Error encountered")
})

//transferring or copying the data
var reader = fs.createReadStream(filename)
var writer = fs.createWriteStream(filename)
reader.pipe(writer)
reader.on('pipe', ()=>{
    console.log("Piping")
})

writer.on('finish', ()=>{
    console.log("writing finish")
})

writer.on('error', ()=>{
    console.log("some error occured")
})

//zip and unzip

var zlib = require('zlib')
var reader = fs.createReadStream(filename)
const outputfilename = "sample.txt.gz"
var writer = fs.createWriteStream(outputfilename)
var gzip = zlib.createGzip()
reader.pipe(gzip).pipe(writer)
var reader = fs.createReadStream('data.txt.gz')
var writer = fs.createWriteStream('data.txt')

var unzip = zlib.createGunzip()
reader.pipe(unzip).pipe(writer)
