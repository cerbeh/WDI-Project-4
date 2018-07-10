import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class UsersIndex extends React.Component{
  constructor(){
    super();
    this.state={
      users: []
    };
  }
  componentDidMount(){
    axios({
      url: '/api/users',
      method: 'GET'
    })
      .then(res => this.setState({ users: res.data}));
  }
  render(){
    return(
      <div>
        <h1>Users Index</h1>
        {this.state.users.map(user =>
          <div key={user._id}>{user.username}
            <Link to={`/users/${user._id}`}>{user.username}</Link>
          </div>
        )}
      </div>
    );
  }
}

export default UsersIndex;
