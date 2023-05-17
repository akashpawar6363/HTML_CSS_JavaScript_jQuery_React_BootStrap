import React from "react";


export default class SquareC extends React.Component
{
    constructor()
    {
        super()
        this.num=0;
        this.state={sqr:0};
    }

    handler=(e)=>
    {
        this.num = e.target.value;
        let res = this.num * this.num;
        this.setState({sqr:res})
    }

    render()
    {
        return <div>
            <input type="number" onBlur={this.handler}/>
            <p>Square = {this.state.sqr}</p>
        </div>
    }
}