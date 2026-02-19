var fs = require("fs")
var data = ""

// var reader = fs.createReadStream("data.txt")
// reader.setEncoding('utf-8')
// reader.on('data',(chunk)=>{
//     data+=chunk
// })
// reader.on('end',()=>{
//     console.log("Finished reading")
//     console.log(data)
// })
// reader.on('error',()=>{
//     console.log("Error")
// })

//writable streams
// var data = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
// var writer = fs.createWriteStream('write.txt')
// writer.write(data, ()=>{
//     console.log('FInished writing')
// })
// writer.end
// writer.on('finish',()=>{
//     console.log("writer writing finished, memory flushed.")
// })

// writer.on('error',()=>{
//     console.log("Writer encountered an error")
// })



//transferring the data or copying the data

// var reader = fs.createReadStream('data.txt')
// var writer = fs.createWriteStream('write.txt')
// reader.pipe(writer)
// reader.on('pipe', ()=>{
//     console.log("copying the data from one file to another")
// })
// writer.on('finish', ()=>{
//     console.log("copying the data from one file to another finished")
// })
// writer.on('error', ()=>{
//     console.log("copying the data from one file to another error")
// })

//zip and unzip
var zlib = require('zlib')
// var reader = fs.createReadStream('data.txt')
// var writer = fs.createWriteStream('data.txt.gz')
// var gzip = zlib.createGzip()
// reader.pipe(gzip).pipe(writer)

var reader = fs.createReadStream('data.txt.gz')
var writer = fs.createWriteStream('data.txt')

var unzip = zlib.createGunzip()
reader.pipe(unzip).pipe(writer)
