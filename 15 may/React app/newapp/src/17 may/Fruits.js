import { Component } from "react";

export default class Fruit extends Component
{
    constructor()
    {
        super()
        this.state ={arr: []}
    }

    handler=(e)=>
    {
        let fruitname = e.target.value
        let temp= [...this.state.arr]
        temp.push(fruitname)
        this.setState({arr:temp})
    }

    getlist=()=>
    {
        return this.state.arr.map((fruitname, index)=>{return <li key={index}>{fruitname}</li>});
    }
    render()
    {
        return <div>
            Add:Fruit <input type="text" onBlur={this.handler} />
            <br></br>
            <ol>
                {this.getlist()}
            </ol>

        </div>
    }

}
