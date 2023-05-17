// import SquareC from "./SquareC";

import { useState } from "react";
import Cases from "./Cases";
import Fruit from "./Fruits";
import Header from "./Header";
import ParentComponent from "./ParentComponent";


export default function App17()
{
    let [hideflag, setflag] = useState(false);
    return <div>
        {!hideflag && <Header></Header>}
        <br></br>
        Hide Header :<input type="checkbox" onChange={(e)=>{setflag(e.target.checked)}}/>
        {/* <SquareC></SquareC> */}
        {/* <Cases></Cases> */}
        {/* <ParentComponent></ParentComponent> */}
        <Fruit></Fruit>
    </div>
}

