import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../actions/auth_actions';

const mapStateToProps = state => {
  return {
    authType: state.ui.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
  };
};


class Auth extends React.Component {
  constructor (props) {
    super(props);
    this.authType = props.authType;
    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange("username")}/>
          </label>

          <label>Password
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange("password")}/>
          </label>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
