import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../lib/Auth';

class AuthLogin extends React.Component {

  state:{

  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: '/api/login',
      method: 'POST',
      data: this.state
    })
    //can only progress if it's a good request
      .then(res => {
      //stores the token in localStorage
        Auth.setToken(res.data.token);
        //redirect to usersindex
        this.props.history.push('/users');
      //which causes a re-render as history is an array.
      })
      .catch(() => {
        this.props.history.replace('/login');
      //Replace will replace the last entry with login so when it goes back we havent moved.
      });
  }

  handleChange=({ target: { name, value}}) => {
    this.setState({ [name]: value });
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
            </div>
            <div className="field">
              <label className="password">password</label>
              <input className="input" type="password" name="password"  onChange={this.handleChange} />
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
