import React from 'react';
// import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bulma';
import './scss/style.scss';

import Statistics from './components/users/Statistics';
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
import About from './components/pages/About';
import Dashboard from './components/pages/Dashboard';
import Bmi from './components/pages/Bmi';
import Calendar from './components/pages/Calendar';
import NotFound from './components/common/NotFound';
import Footer from './components/common/Footer';
import ProtectedRoute from './components/common/ProtectedRoute';
import FlashMessages from './components/common/FlashMessages';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main>
          <FlashMessages />
          <section className="section-content">
            <Switch>
              <ProtectedRoute path="/users/:id/edit" component={UsersEdit} />
              <ProtectedRoute path="/users/:id/sessions/new" component={SessionsNew} />
              <ProtectedRoute path="/users/:id/sessions/:sessionId/edit" component={SessionsEdit} />
              <ProtectedRoute path="/users/:id/sessions/:sessionId" component={SessionsShow} />
              <ProtectedRoute path="/users/:id/sessions/" component={SessionsIndex} />
              <ProtectedRoute path="/users/:id" component={UsersShow} />
              <Route path="/users" component={UsersIndex} />
              <Route path="/login" component={AuthLogin} />
              <Route path="/register" component={AuthRegister} />
              <Route exact path="/bmi" component={Bmi} />
              <Route exact path="/calendar" component={Calendar} />
              <Route exact path="/dashboard" component={Dashboard} />
              <ProtectedRoute path="/statistics" component={Statistics} />
              <Route exact path="/about" component={About} />
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
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
