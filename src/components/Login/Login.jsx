import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { LOGIN } from "../../action/index";

class Login extends Component {
  state = {
    Email: "",
    password: ""
  };
  componentDidMount() {
    console.log(this.props);
  }
  hanelchange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    });
  };
  submit = e => {
    e.preventDefault();
    this.props.login(this.state);
  };
  render() {
    console.log(this.state);
    return (
      <div className="L">
        <div className="login-reg-panel">
          <div className="login-info-box">
            <h2>Have an account?</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <label id="label-register" htmlFor="log7reg-show">
              Login
            </label>
            <input
              type="radio"
              name="active-log-panel"
              id="log-reg-show"
              checked="checked"
            />
          </div>

          <div className="register-info-box">
            <h2>Don't have an account?</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <label id="label-login" for="log-login-show">
              Register
            </label>
            <input type="radio" name="active-log-panel" id="log-login-show" />
          </div>

          <div className="white-panel">
            <form className="login-show" onSubmit={this.submit}>
              <h2>LOGIN</h2>
            <input type="text" name="Email" onChange={this.hanelchange} placeholder="Email" />
          <input type="password" name="password" onChange={this.hanelchange} placeholder="password" />
              <input type="submit" value="Login" />
            </form>
            
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToPros = state => {
  return {
    ...state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: e => {
      dispatch(LOGIN(e));
    }
  };
};
export default connect(
  mapStateToPros,
  mapDispatchToProps
)(Login);
