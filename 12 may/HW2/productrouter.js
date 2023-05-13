import { Router } from "express";
let productrouter = Router()
export default productrouter

let product = [
    {
        "productId": 1,
        "productName": "Mobile",
        "productCost": 20000,
        "units": 10 
    }
]

productrouter.get('/',(req,res)=>{
    res.send(product);
})

productrouter.post('/add',(req,res)=>{
    let add = req.body;
    product.push(add);
    res.send("Document added successfully");
})

productrouter.get('/getinfo',(req,res)=>{
    let pid = req.query.pId
    const p = product.find(({productId})=> productId == pid)
    const check = product.findIndex(({productId}) => productId == pid)
    if(check>=0)
    {
        res.send(p)
    }
    else
    {
        res.send("Invalid Id")
    }
})

productrouter.get('/all',(req,res)=>{
    res.send(product)
})

productrouter.put('/changecost/:pId/:pCost', (req, res)=>{
    let pi = req.params.pId
    let pc = req.params.pCost
    const p = product.find(({productId}) => productId == pi)
    const check = product.findIndex(({productId}) => productId == pi)
    if(check>0)
    {
        p.productCost=pc
        res.send("updated successfully")
    }
    else
    {
        res.send("invalid input")
    }
})

productrouter.delete('/delete/:pId',(req,res)=>{
    let pi = req.params.pId
    const check = product.findIndex(({productId}) => productId == pi)
    if(check>0)
    {
        product.pop(check)
        res.send("removed successfully")
    }
    else
    {
        res.send("invalid input")
    }
})