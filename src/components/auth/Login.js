import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class AuthLogin extends React.Component {

  state= {
    // errors: {}
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
      .catch(() => {
        this.props.history.replace('/login');
      });
      // .catch(err => {
      //   this.setState({ errors: err.response.data.errors });
      //   // Flash.setMessage('danger', 'Invalid Credentials');
      // });
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  render() {
    return (
      <section className="hero section registrationBackground is-fullheight ">
        <div className="container">
          <h1 className="title">Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="email">email</label>
              <input className="input" name="email" onChange={this.handleChange} />
              {/* {this.state.errors && <small>{this.state.errors.email}</small>} */}
            </div>
            <div className="field">
              <label className="password">password</label>
              <input className="input" type="password" name="password"  onChange={this.handleChange} />
              {/* {this.state.errors && <small>{this.state.errors.password}</small>} */}
            </div>
            <button className="button text-is-centered">Submit</button>
            <hr />
            <Link className="navbar-item" to="/register">Not a member? Sign up now</Link>
          </form>
        </div>
      </section>
    );
  }
}

export default AuthLogin;
