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
  componentDidMount() {
    axios.get('/api/users')
      .then(res => this.setState({ users: res.data }));
  }
  render(){
    return(
      <section>
        <h1>Users Index</h1>
        <div>
          <div>
            {this.state.users.map(user =>
              <div key={user._id}>{user.username}
                <Link to={`/users/${user._id}`}>{user.username}</Link>
              </div>
            )}
          </div>
        </div>
        <section className="section has-background-dark">
          <div className="container has-text-centered">
            <div className="social">
              <h1 className="title">Interested in working together? Lets talk.</h1>
              <ul>
                <li><a href="https://twitter.com/fbnlsr"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://github.com/fbnlsr"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/fbnlsr/"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="mailto:hello@primative.net"><i className="fas fa-envelope"></i></a></li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default UsersIndex;
