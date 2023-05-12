import express from 'express'

let app = express()

import guestrouter from './guestrouter.js';
app.use('/guest', guestrouter);

import allrouter from './allrouter.js';
app.use('/all', allrouter);

import addrouter from './addrouter.js';
app.use('/add', addrouter);


app.listen(6363, ()=>{
    console.log("This is server from port 6363");
})