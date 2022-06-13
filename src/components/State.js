import React from 'react';


class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ahrorshoh",
            surname: "Umrzoqov",
            age: 19,
            job: "Frontend Web Developer"
        };
    }

    render() {
        return (
            <div>
                <h3><i >(These are made through the state)</i></h3>
                <h1>My name is {this.state.name}</h1>
                <h2>My surname is {this.state.surname}</h2>
                <h2>I'm {this.state.age} years old.</h2>
                <h2>My job is {this.state.job}</h2>
            </div>
        );
    }
}



export default State;
