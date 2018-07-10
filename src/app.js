import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import UsersIndex from './components/users/Index';
import 'bulma';
import './scss/style.scss';
class App extends React.Component {
  render() {
    return (
      <main>
        <section>
          <div className="container">
            <h1>TEAM CHARTREUSE</h1>
            <Switch>
              <Route path="/users" component={UsersIndex} />
              {/* <Route exact path="/" component={About} /> */}
            </Switch>

          </div>
        </section>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
