import React from "react";
import "./ex2.css"


export default function ChildComponent({num1, num2, f1})
{
    let res;
    function compute(e)
    {
        switch(e.target.value)
        {
            case 'add': res = num1+num2;
                        f1(res);
                        break;
            case 'pow': res = Math.pow(num1, num2);
                        f1(res);
                        break;
            default: break;
        }
    }

    return <div className="bordered">
        <select onChange={compute}>
            <option></option>
            <option value="add">Add</option>
            <option value="pow">Power</option>
        </select>    
    </div>
}
