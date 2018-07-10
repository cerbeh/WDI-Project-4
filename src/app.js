import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UsersIndex from './components/users/Index';
import Home from './components/pages/Home';
import 'bulma';
import './scss/style.scss';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <section>
            <div className="container">
              <h1>TEAM CHARTREUSE</h1>
              <Switch>
                <Route path="/users" component={UsersIndex} />
                <Route exact path="/" component={Home} />
              </Switch>

            </div>
          </section>
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
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
