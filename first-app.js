const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRouter = require('./routes/admin');
const shopRouter =require('./routes/shop');
const contact =require('./routes/contact');
const success = require('./routes/success');

app.use(express.static(path.join(__dirname , 'public')))

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin', adminRouter);
app.use('/shop', shopRouter);
app.use(success);
app.use(contact);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','notFound.html'));
})

app.listen(3000);
