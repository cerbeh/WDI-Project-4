import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';

class Navbar extends React.Component{
  state={
    navbarOpen: false
  }
  toggleNavbar =() =>{
    this.setState({navbarOpen: !this.state.navbarOpen});
  }
  componentDidUpdate(prevProps){
    if(prevProps.location.pathname !== this.props.location.pathname){
      this.setState({ navbarOpen: false});
    }
  }
  handleLogout = () => {
    Auth.logout();
    this.props.history.push('/');
  }
  render(){
    console.log(Auth.getPayload());
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/1915-200.png" height="50" />
          </Link>

          <a role="button"
            className={`navbar-burger${this.state.navbarOpen ? ' is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={this.toggleNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu${this.state.navbarOpen ? ' is-active' : ''}`}>
          <div className="navbar-end">
            <Link to="/users" className="navbar-item">All Users</Link>
            {Auth.isAuthenticated() && <Link to={`/users/${currentUser._id}`}>My Profile</Link>}
            {Auth.isAuthenticated() && <a onClick={this.handleLogout} className="navbar-item">Logout</a>}
          </div>
        </div>
      </nav>
    );

  }
}

export default withRouter(Navbar);
