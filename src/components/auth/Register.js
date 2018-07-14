import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class AuthRegister extends React.Component {

  state = {
    errors: {}
  }

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
        Flash.setMessage('success', 'Thank you for registering. Please log in now');
        //redirect to login
        this.props.history.push('/login')
          .catch(err => this.setState({errors: err.response.data.errors}));
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
              {this.state.errors.username && <small>{this.state.errors.username}</small>}
            </div>
            <div className="field">
              <label className="email">Email<span className="req">*</span></label>
              <input className="input" name="email"  onChange={this.handleChange} />
              {this.state.errors.email && <small>{this.state.errors.email}</small>}
            </div>
            <div className="field">
              <label className="password">Password<span className="req">*</span></label>
              <input className="input" type="password" name="password" onChange={this.handleChange} />
              {this.state.errors.password && <small>{this.state.errors.password}</small>}
            </div>
            <div className="field">
              <label className="passwordConfirmation">Password Confirmation<span className="req">*</span></label>
              <input className="input" type="password" name="passwordConfirmation"  onChange={this.handleChange} />
              {this.state.errors.passwordConfirmation && <small>{this.state.errors.passwordConfirmation}</small>}
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
