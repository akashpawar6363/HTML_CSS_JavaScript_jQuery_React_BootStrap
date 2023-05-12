import { Router } from "express";
let allrouter = Router();
export default allrouter;

let arr = ["Akash", "nikhil", "Abhijeet", "Ashish", "Ajay", "Swaraj"]

allrouter.get('/', (req, res) => {
    let temp = arr.map((ele,index)=>{
        let name = (index +1) + '.' + ele;
        return name;
    })
    return res.send(temp);

})
