import express from 'express';

let app =  express();

import productrouter from './productrouter.js'
app.use(express.json());
app.use('/product', productrouter);

app.listen(8080, (req,res)=>{
    console.log('8080 server is running')
})
