import React, { Component } from 'react'
class LogIn extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div>Log In<hr />
                <input type="text" placeholder="Username" value={this.props.content.logInName} onChange={(e) => { this.props.updateView("logIn", "logInName", e.target.value) }} /><br />
                <input type="text" placeholder="Password" value={this.props.content.password} onChange={(e) => { this.props.updateView("logIn", "password", e.target.value) }} /><br />
                <button onClick={() => { this.props.logIn() }}>
                    Log In
                </button><br />
                <button onClick={() => { this.props.changeView("register") }}>
                    Create an Account
                </button>
            </div>
        );
    }
}

export default LogIn;