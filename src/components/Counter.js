import React from 'react';
import "./main.css";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement(){
        this.setState({
            count: this.state.count - 1
        })
    }

    reset(){
        this.setState({
            count: 0 
        })
    }

    render() {
        return (
            <div className='main'>
                <h3><i>(This is Counter)</i></h3>
                <h1>Count: {this.state.count}</h1>
                <button className="btns" onClick={(e) => this.increment(e)}>+</button>
                <button className="btns" onClick={(e) => this.decrement(e)}>-</button>
                <button className="btns" onClick={(e) => this.reset(e)}>Reset</button>
            </div>
        );
    }
}



export default Counter;
