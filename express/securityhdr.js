const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.get('/home',(req,res)=>{
    res.setHeader('X-Content-Type-Options','nosniff');
    res.setHeader('X-Frame-Options','DENY');
    res.setHeader('X-XSS-Protection','1; mode=block');
    res.setHeader('strict-transport-security','max-age=31536000');
    res.send("welcome to home page");
});


app.listen(3000,()=>{
    console.log("server is running on port 3000");
});