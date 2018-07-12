import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../lib/Auth';

class AuthRegister extends React.Component {

  state:{}

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: '/api/register',
      method: 'POST',
      data: this.state
    })
      .then(res => {
      //store the token in localStorage
        Auth.setToken(res.data.token);
        //redirect to login
        this.props.history.push('/login');
      });
  }


  handleChange=({ target: { name, value}}) => {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section className="hero section registrationBackground is-fullheight ">
        <div className="container">
          <h1 className="title">Register</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="username">Username<span className="req">*</span></label>
              <input className="input" name="username"  onChange={this.handleChange} />
            </div>
            <div className="field">
              <label className="email">Email<span className="req">*</span></label>
              <input className="input" name="email"  onChange={this.handleChange} />
            </div>
            <div className="field">
              <label className="password">Password<span className="req">*</span></label>
              <input className="input" type="password" name="password" onChange={this.handleChange} />
            </div>
            <div className="field">
              <label className="passwordConfirmation">Password Confirmation<span className="req">*</span></label>
              <input className="input" type="password" name="passwordConfirmation"  onChange={this.handleChange} />
            </div>

            <button className="button">Submit</button>
            <hr />
            <Link className="navbar-item" to="/login">Already have an account? Login here.</Link>
          </form>
        </div>
      </section>
    );
  }
}

export default AuthRegister;
