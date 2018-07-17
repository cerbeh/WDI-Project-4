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
    return (
      <nav className="navbar is-fixed-top is-hidden-mobile" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          {/* <Link to="/" className="navbar-item">
            <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/1915-200.png" height="50" />
          </Link> */}
          <a role="button"
            className={`navbar-burger${this.state.navbarOpen ? ' is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={this.toggleNavbar}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu${this.state.navbarOpen ? ' is-active' : ''}`}>
          <div className="navbar-end">
            {Auth.isAuthenticated() && <Link to='/dashboard' className="navbar-item"><i className="fas fa-tachometer-alt "></i></Link>}
            {Auth.isAuthenticated() &&
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link"><i className="far fa-user"></i></a>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to={`/users/${Auth.getPayload().sub}`}>Profile</Link>
                  <a onClick={this.handleLogout} className="navbar-item">Logout</a>
                </div>
              </div>
            }
            {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">Login</Link>}
            {!Auth.isAuthenticated() && <Link className="navbar-item" to="/register">Register</Link>}

          </div>
        </div>
      </nav>
    );

  }
}

export default withRouter(Navbar);
