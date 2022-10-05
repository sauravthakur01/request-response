const path = require('path');
const rootDir = require('../util/path');

exports.getAllProducts = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
}

exports.postProducts = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop/');
}

exports.shop = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html' ))
}