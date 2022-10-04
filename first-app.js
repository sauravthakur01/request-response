const http = require("http");
const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log('in middlewARE')
    res.send( { key1: "value" });
    next();
})

app.use((req,res,next)=>{
    console.log('in second middleware');
})

app.listen(3000);
