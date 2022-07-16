import React from 'react';
import "./counter.css";

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
            <div className='count'>
                <h2 id='count'>Counter up stats</h2>
                <h2 id='count-number'>Count: {this.state.count}</h2>
                <button className="btns" onClick={(e) => this.increment(e)}>+</button>
                <button className="btns" onClick={(e) => this.decrement(e)}>-</button> <br/>
                <button className="btns3" onClick={(e) => this.reset(e)}>Reset</button>
                <h3 id='count-skill'>Skills: JavaScript, React.js</h3>
                <h4 id='count-tool'>Tools: VS Code, Git Bash</h4>
            </div>
        );
    }
}



export default Counter;
