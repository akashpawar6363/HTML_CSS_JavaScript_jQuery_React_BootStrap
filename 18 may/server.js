import express, { json } from 'express';

const app = express();
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(json());

app.get("/ajax", (req, res)=>{
    // res.render("textajax");
    res.render("testajaxjquery");
})

app.get("/message", (req,res) => {
    res.send({message: "Swaraj Is Naughty", sender: "Swaraj Swataha"})
})

app.post('/square', (req,res)=>{
    let v = req.body.num;
    let sqr = v*v;
    res.send({sqr:sqr})
})


app.listen(6363, ()=>{
    console.log("Server Running on Port 6363");
})