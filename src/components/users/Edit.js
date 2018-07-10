import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

import UsersForm from './Form';

class UsersEdit extends React.Component{
  state ={
    errors: {}
  }

  componentDidMount() {
    axios.get('/api/users/')
      .then(res => {
        this.setState({user: res.data});
      })
      .catch(err => this.setState({ error: err.message }));
  }

  handleChange=({ target: { name, value }})=>{
    this.setState({ [name]: value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `/api/users/${this.props.match.params.id}`,
      method: 'PUT',
      data: this.state,
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push(`/users/${Auth.getPayload().sub}`))
      .catch(err => this.setState({errors: err.response.data.errors}));
  }

  render(){
    return(
      <UsersForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    );
  }
}

export default UsersEdit;
