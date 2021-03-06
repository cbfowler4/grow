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
      this.props.signup(this.state);
    } else {
      this.props.login(this.state);
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
      <div className='auth-aside'>
        <h1>Enter your information below</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange("email")}/>

          { this.authType === "signup" &&
            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange("username")}/>
          }

          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange("password")}/>

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
