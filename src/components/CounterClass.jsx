import React from 'react';

export class CounterClass extends React.Component{
    constructor(){
        super();
        this.state={count:0}

    }

        increment=()=>{
            this.setState({count:this.state.count+1});
        }
                decrement=()=>{
            this.setState({count:this.state.count-1});
        }

        reset=()=>{
            this.setState({count:0});
        }
        
    
    render(){
            return(
                <div className='count'>
                    <h2>Count:{this.state.count}</h2>
                    <button onClick={this.increment}>increment</button>
                    <button onClick={this.decrement}>decrement</button>
                    <button onClick={this.reset}>reset</button>
                </div>
            )
        }
}