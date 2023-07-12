import React, { Component } from 'react'
class Register extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div>
                Register<hr />
                <input type="text" placeholder="Username" value={this.props.content.logInName} onChange={(e) => { this.props.updateView("register", "logInName", e.target.value) }} /><br />
                <input type="text" placeholder="E-mail" value={this.props.content.email} onChange={(e) => { this.props.updateView("register", "email", e.target.value) }} /><br />
                <input type="text" placeholder="Password" value={this.props.content.password} onChange={(e) => { this.props.updateView("register", "password", e.target.value) }} /><br />
                <input type="text" placeholder="Verify Password" value={this.props.content.verifyPassword} onChange={(e) => { this.props.updateView("register", "verifyPassword", e.target.value) }} /><br />
                <button onClick={() => { this.props.register() }}>
                    Create Account
                </button><br/>
                <button onClick={() => { this.props.changeView("logIn") }}>
                    Log In
                </button>
            </div>
        );
    }
}

export default Register;