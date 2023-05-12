import { Router } from "express";
let addrouter = Router();
export default addrouter;

let guestname = []

let num = 0
addrouter.post('/', (req, res) => {
    let user = req.query.guestName;
    num = num + 1
    guestname.push(num, user);
    res.send(guestname);
})