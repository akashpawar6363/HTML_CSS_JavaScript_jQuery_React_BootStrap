import "./ex2.css"
import { useState } from "react";
import ChildComponent from "./ChildComponent";

export default function ParentComponent()
{
    let [n1, setn1] = useState(0)
    let [n2, setn2] = useState(0)
    let [res, setRes] = useState(0)

    function changeResult(v)
    {
        setRes(v)
    }

    return <div className="bordered">
        Num 1 : <input type="number" onBlur={(e)=>setn1(e.target.value)} /> 
        <br></br>
        Num 2 : <input type="number" onBlur={(e)=>setn2(e.target.value)}/>
        <br></br>
        <ChildComponent f1={changeResult} num1={parseInt(n1)} num2={parseInt(n2)}></ChildComponent>
        <br></br>
        <p>Result: {res}</p>

        
    </div>

}