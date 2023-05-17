import React from "react";

export default class CurrencyConverter extends React.Component
{
    render()
    {
        return <div>
            <input type="text" placeholder="Enter a number" id="i1"></input>
            <br></br>
            <br></br>
            <select  id="s1">
                <option>select</option>
                <option>Dollar</option>
                <option>Rupees</option>
                <option>Euro</option>
            </select>
            <select  id="s2">
                <option>select</option>
                <option>Dollar</option>
                <option>Rupees</option>
                <option>Euro</option>
            </select>
            <br></br>
            <br></br>
            <button onclick="f1()">Convert</button>
            <br></br>
            <br></br>
            <p><b id="p1"></b></p>
        </div>
    }
}