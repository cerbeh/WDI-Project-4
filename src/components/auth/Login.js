import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class AuthLogin extends React.Component {

  state= {
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: '/api/login',
      method: 'POST',
      data: this.state
    })
      .then(res => Auth.setToken(res.data.token))
      .then(() => Flash.setMessage('success', 'Welcome Back!'))
      .then(() => this.props.history.push(`/users/${Auth.getPayload().sub}`))
    //Replace will replace the last entry with login so when it goes back we havent moved.
      .catch(() => Flash.setMessage('danger', 'Invalid Credentials')
      );
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section className="hero section registrationBackground is-fullheight ">
        <div className="container">
          <h1 className="title">Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="usernameOrEmail">Username or Email</label>
              <input className="input" name="usernameOrEmail" onChange={this.handleChange} />
            </div>
            <div className="field">
              <label className="password">Password</label>
              <input className="input" type="password" name="password"  onChange={this.handleChange} />

            </div>
            <button className="button">Submit</button>
            <hr />
          </form>
          <Link className="" to="/register">Not a member? Sign up now</Link>
        </div>
      </section>
    );
  }
}

export default AuthLogin;
