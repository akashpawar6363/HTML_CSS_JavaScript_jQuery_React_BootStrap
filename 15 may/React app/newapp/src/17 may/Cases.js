import React, { useState } from "react";

export default function Cases()
{
    let [textvalue, setText] = useState("");
    let [u, setupper] = useState();

    function handler(e)
    {
        setText(e.target.value);
    }

    function ucase(e)
    {
        if(e.target.checked)
            setupper(textvalue.toUpperCase())
        else
            setupper(textvalue)
    }

    function lcase(e)
    {
        if(e.target.checked)
            setupper(textvalue.toLowerCase())
        else
            setupper(textvalue)
    }

    function tcase(e)
    {
        if(e.target.checked)
            setupper(textvalue.charAt(0).toUpperCase().concat(textvalue.substring(1).toLowerCase()))
        else  
            setupper(textvalue)
    }

    function casehandler(val)
    {
        // let val = e.target.value
        switch(val)
        {
            case 'uc': setupper(textvalue.toUpperCase()); break;
            case 'lc': setupper(textvalue.toLowerCase()); break;
            case 'tc': setupper(textvalue.charAt(0).toUpperCase().concat(textvalue.substring(1).toLowerCase())); break;
            default: break;
        }
    }

    function casehandler2(e){
        let val = e.target.value
        switch(val)
        {
            case 'uc': setupper(textvalue.toUpperCase()); break;
            case 'lc': setupper(textvalue.toLowerCase()); break;
            case 'tc': setupper(textvalue.charAt(0).toUpperCase().concat(textvalue.substring(1).toLowerCase())); break;
            default: break;
        }

    }

    return <center>
        <input type="text" onBlur={handler} />
        <br></br>
        <br></br>
        Uppercase : <input type="radio" name="casechoice" value="uc" onChange={casehandler2}/>
        <br></br>
        lowercase: <input type="radio" name="casechoice" value="lc" onChange={casehandler2}/>
        <br></br>
        Titlecase: <input type="radio" name="casechoice" value="tc" onChange={casehandler2}/>
        <br></br>
        <p>CASES : {u} </p>
    </center>
}