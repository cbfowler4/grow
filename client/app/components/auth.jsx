import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../actions/auth_actions';
import { showSignup, showLogin } from '../actions/ui_actions';

const mapStateToProps = state => {
  return {
    authType: state.ui.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    showLogin: () => dispatch(showLogin()),
    showSignup: () => dispatch(showSignup())
  };
};


class Auth extends React.Component {
  constructor (props) {
    super(props);
    this.authType = props.authType;
    this.state = {
      email: "",
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSwitchTo = this.handleSwitchTo.bind(this);
  }

  handleSubmit(e) {
    if (this.authType === "signup") {
      this.props.signup(e.target.value);
    } else {
      this.props.login(e.target.value);
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSwitchTo(toAuthType) {
    return () => {
      if (toAuthType === "signup") {
        this.props.showSignup();
      } else {
        this.props.showLogin();
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    this.authType = nextProps.authType;
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>email
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange("email")}/>
          </label>

          { this.authType === "signup" &&
            <label>Username
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange("username")}/>
            </label>
          }

          <label>Password
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange("password")}/>
          </label>

          <button>{this.authType === "signup" ? "Sign Up!" : "Login!"}</button>
        </form>

          { this.authType === "signup" &&
            <span>Already a member of Grow? <a
              onClick={this.handleSwitchTo("login")}>Login!</a> </span>
          }

          { this.authType === "login" &&
            <span>Not a member of Grow? <a
               onClick={this.handleSwitchTo("signup")}>Sign up!</a> </span>
          }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
