import React, { Component } from 'react'
import Dashboard from './Dashboard';
import LogIn from './LogIn';
import Register from './Register';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = "http://localhost:3001"
    this.isLoggedIn()
  }

  state = {
    currentView: "logIn",
    user: null,
    views: {
      logIn: {
        logInName: "user1",
        password: "pass1"
      },
      register: {
        logInName: "",
        email: "",
        password: "",
        verifyPassword: ""
      },
    }
  }

  updateView(view, field, value) {
    var views = { ...this.state.views };
    views[view][field] = value;
    this.setState({ views })
  }

  changeView(currentView) {
    this.setState({ currentView })
  }

  register() {
    axios.post("/User?func=register", this.state.views.register).then((res) => {
      this.changeView("logIn")
    }).catch((err) => { console.log(err) })
  }

  logIn() {
    axios.post("/User?func=logIn", this.state.views.logIn).then((res) => {
      console.log(res.data)
      if (res.data.success) {
        this.setState({ user: res.data.user }, () => { this.changeView("dashboard") })
      }
    }).catch((err) => { console.log(err) })
  }

  isLoggedIn() {
    axios.get("/User?func=isLoggedIn").then((res) => {
      if (res.data.success) {
        this.setState({ user: res.data.user }, () => { this.changeView("dashboard") })
      }
    })
  }

  logOut() {
    axios.get("/auth/User?func=logOut").then((res) => {
      if (res.data) {
        window.location.href = "/"
      }
    })
  }
  
  render() {
    return (<div>
      {this.state.currentView === "dashboard" ?
        <Dashboard content={this.state.user} updateView={this.updateView.bind(this)} changeView={this.changeView.bind(this)} logOut={this.logOut.bind(this)} />
        : null}
      {this.state.currentView === "logIn" ?
        <LogIn content={this.state.views.logIn} updateView={this.updateView.bind(this)} changeView={this.changeView.bind(this)} logIn={this.logIn.bind(this)} />
        : null}
      {this.state.currentView === "register" ?
        <Register content={this.state.views.register} updateView={this.updateView.bind(this)} changeView={this.changeView.bind(this)} register={this.register.bind(this)} />
        : null}
    </div>);
  }
}

export default App;
