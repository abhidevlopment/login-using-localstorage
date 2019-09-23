import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);

    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      username: "",
      password: "",
      loggedIn
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;
    //login magic
    if (username === "a" && password === "b") {
      localStorage.setItem("token", "12345");
      this.setState({
        loggedIn: true
      });
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/admin" />;
    }
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={this.onChange}
            value={this.state.username}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.onChange}
            value={this.state.password}
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
export default Login;
