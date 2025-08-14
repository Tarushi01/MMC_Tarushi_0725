import { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogin() {
    alert(`Logging in as ${this.state.username}`);
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        /><br /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        /><br /><br />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
