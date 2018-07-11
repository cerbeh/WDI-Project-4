import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bulma';
import './scss/style.scss';

import UsersIndex from './components/users/Index';
import UsersShow from './components/users/Show';
import UsersEdit from './components/users/Edit';

import SessionsNew from './components/sessions/New';
import SessionsIndex from './components/sessions/Index';
import SessionsShow from './components/sessions/Show';
import SessionsEdit from './components/sessions/Edit';

import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';

import Home from './components/pages/Home';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <section className="section-content">
            <Switch>
              <Route path="/users/:id/edit" component={UsersEdit} />
              <Route path="/users/:id/sessions/new" component={SessionsNew} />
              <Route path="/users/:id/sessions/:sessionId/edit" component={SessionsEdit} />
              <Route path="/users/:id/sessions/:sessionId" component={SessionsShow} />
              <Route path="/users/:id/sessions/" component={SessionsIndex} />
              <Route path="/users/:id" component={UsersShow} />
              <Route path="/users" component={UsersIndex} />
              <Route path="/login" component={AuthLogin} />
              <Route path="/register" component={AuthRegister} />
              <Route exact path="/" component={Home} />
            </Switch>
          </section>
          <Footer />
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
