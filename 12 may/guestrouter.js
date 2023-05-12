import { Router } from "express";
let guestrouter = Router();
export default guestrouter;

let hostname = 'do while'

guestrouter.get('/' , (req, res) =>{
    res.send(`this is from ${hostname} Boys`);
})