import express from 'express';
let app = express();
import path from 'path'
app.set('views', './views');
app.set('view engine', 'hbs')

app.get('/login', (req,res)=>{
    res.sendFile("F:\\GitHub Repository\\HTML_CSS_JavaScript_jQuery_React_BootStrap\\13 may\\login.html")
})

app.get('/verify', (req,res)=>{
    let user = req.query.uname
    let pass = req.query.password

    res.render("welcome", {username: user})
})

app.get('/calculator', (req,res)=>{
    res.render("calc")
})

import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({extended: true}));

app.post('/docalculation', (req,res) =>{
    let n1 = req.body.num1
    let n2 = req.body.num2

    let sum = parseInt(n1)+parseInt(n2)
    res.render("calc", {result: sum})
})

app.get('/tables', (req,res)=>{
    res.render("mathstable")
})

app.post('/generate-table', (req,res)=>{
    let num = req.body.num
    let arr = []
    for(var i=1; i<=10; i++)
    {
        arr[i] = `${num} * ${i} = ${num*i}`
    }
    res.render("mathstable", {rowdata: arr})
})


app.listen(1000, ()=>{
    console.log("Server is running on port 1000")
})