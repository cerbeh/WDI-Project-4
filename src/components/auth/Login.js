import React from 'react';
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
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="email">Email</label>
          <input className="input" name="email" placeholder="Email"  onChange={this.handleChange} />
        </div>
        <div className="field">
          <label className="password">Password</label>
          <input className="input" type="password" name="password" placeholder="Password"  onChange={this.handleChange} />
        </div>

        <button className="button">Submit</button>
      </form>
    );
  }
}

export default AuthLogin;
