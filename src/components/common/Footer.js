import React from 'react';

const Footer = () => {
  return (
    <nav className="navbar is-link is-fixed-bottom" role="navigation">
      <div className="navbar-brand">
        <a className="navbar-item is-expanded  is-block has-text-centered">
          <i className="fa fa-user"></i>
          <p className="is-size-7">Account</p>
        </a>
        <a className="navbar-item is-expanded  is-block has-text-centered">
          <i className="far fa-calendar-alt"></i>
          <p className="is-size-7">Schedule</p>
        </a>
        <a className="navbar-item is-expanded is-block has-text-centered">
          <i className="far fa-compass"></i>
          <p className="is-size-7">Session</p>
        </a>
        <a className="navbar-item is-expanded  is-block has-text-centered">
          <i className="fas fa-chart-line"></i>
          <p className="is-size-7">Statistics</p>
        </a>
        <a className="navbar-item is-expanded  is-block has-text-centered">
          <i className="fas fa-history"></i>
          <p className="is-size-7">History</p>
        </a>
      </div>
    </nav>
  );
};

export default Footer;
