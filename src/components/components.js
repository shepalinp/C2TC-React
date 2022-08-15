import { Component } from "react";

class Counter extends Component
{

    constructor(props)
    {
        super(props)
        this.state={
            count:0
        }
    }

    increment()
    {
        this.setState(
            {
                count:this.state.count+10
            }
        )
        console.log(this.state.count)
    }
    render()
    {
        return(
            <div>
                <div>
                count-{this.state.count}
                </div>
             <button onClick={()=>this.increment()}>Click Me</button>
            </div>
        )
    }
}

export default Counter