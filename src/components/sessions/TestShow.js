import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import Auth from '../../lib/Auth';

class SessionsShow extends React.Component {

  state = {
    daysDisplayed: null,
    mode: 'all-time'
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}/sessions/${this.props.match.params.sessionId}`)
      .then(res => this.setState({ ...this.state, daysDisplayed: this.handleAllTimeDates(), session: res.data }));
  }

  componentDidUpdate = () => {
    const labels = [];
    for (var i = (this.state.daysDisplayed - 1); i >= 0; i--) {
      labels.push(moment().subtract(i, 'days').format('YYYY-MM-DD'));
    }
    const chartData = labels.map(date => {
      if (this.props.user.session && Object.keys(this.props.user.session).includes(date)) {
        return this.props.user.session[date];
      } else {
        return 0;
      }
    });
  }
  handleDelete = () => {
    axios({
      url: `/api/users/${this.props.match.params.id}/sessions/${this.props.match.params.sessionId}`,
      method: 'DELETE',
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push(`/users/${this.props.match.params.id}/sessions`));
  };

  handleGraphDates = ({ target: { value, name }}) => {
    this.setState({ ...this.state, daysDisplayed: value, mode: name });
  }

  handleAllTimeDates = () => {
    const a = moment(this.props.user.created);
    const b = moment();
    return Math.abs(a.diff(b, 'days')) + 1;
  }

  handleDisplayMode = (mode) => {
    const modes = {
      'all-time': 'All Time',
      '7-days': 'Last 7 days',
      '30-days': 'Last 30 days'
    };
    return modes[mode];
  }

  render() {
    return(
      <section>
        {this.state.session &&
          <h2>Your Practice Progress ({this.handleDisplayMode(this.state.mode)})</h2>
      <button
        className="button is-primary"
        onClick={this.handleGraphDates}
        value={this.handleAllTimeDates()}
        name="all-time"
        disabled={this.state.mode === 'all-time'}
      >
        Show all time
      </button>
      &nbsp;
      <button
        className="button is-primary"
        onClick={this.handleGraphDates}
        value={7}
        name="7-days"
        disabled={this.state.mode === '7-days'}
      >
        Show last 7 days
      </button>
      &nbsp;
      <button
        className="button is-primary"
        onClick={this.handleGraphDates}
        value={30}
        name="30-days"
        disabled={this.state.mode === '30-days'}
      >
        Show last 30 days
      </button>
      { this.state.daysDisplayed && <div className="chart-container">
        <canvas id="line"></canvas>
      </div> }
          <section className="section">
            <div className="container">
              <h1 className="title">{this.state.session.title} on {this.state.session.date}</h1>
              <hr />
              <h2 className="subtitle">Session Type:</h2>
              <strong>{this.state.session.discipline}</strong>
              <h2 className="subtitle">Duration:</h2>
              <i className="far fa-clock "></i><strong>{this.state.session.duration}</strong> minutes
              <h2 className="subtitle">Notes:</h2>
              <p>
                <strong>{this.state.session.notes}</strong>
              </p>
            </div>
            <section>
              <div className="container">
                <button onClick={this.handleDelete} className="button">Delete</button>
                <Link
                  to={`/users/${this.props.match.params.id}/sessions/${this.props.match.params.sessionId}/edit`}
                  className="button"
                >Edit
                </Link>

              </div>

            </section>


          </section>
        }
      </section>
    );
  }
}

export default SessionsShow;
