import React, { Component } from 'react'
class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (<div>Dashboard<hr />
            {this.props.content.logInName}<br />
            <button onClick={() => { this.props.logOut() }}>
                Log Out
            </button>
        </div>);
    }
}

export default Dashboard;