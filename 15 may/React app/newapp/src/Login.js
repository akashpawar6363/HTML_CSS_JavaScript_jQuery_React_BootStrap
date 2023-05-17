import React from "react";

export default class Login extends React.Component
{
    render()
    {
        return <div>
            Username: <input type="text" placeholder="Enter Username"></input><br></br><br></br>
            Password: <input type="password" placeholder="Enter Password"></input><br></br><br></br>
            <button>Login</button>
            <hr></hr><hr></hr>
            

        </div>
    }
}