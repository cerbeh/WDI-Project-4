const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI }= require('../config/environment');
const User = require('../models/user');


mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => User.create([{
      username: 'martin',
      email: 'martin@martin.com',
      admin: true,
      password: 'martin',
      passwordConfirmation: 'martin',
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        note: 'Smashed it.'
      }]
      // practiceType: [{name: 'keiko'}, {name: 'kata'}]
    }, {
      username: 'othermartin',
      email: 'othermartin@othermartin.com',
      admin: true,
      password: 'othermartin',
      passwordConfirmation: 'othermartin',
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        note: 'Smashed it.'
      }]
      // practiceType: [{name: 'shiai'}, {name: 'kata'}]
    }, {
      username: 'linda',
      email: 'linda@linda.com',
      admin: true,
      password: 'linda',
      passwordConfirmation: 'linda',
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        note: 'Smashed it.'
      }]
      // practiceType: [{name: 'keiko'}, {name: 'kata'}]
    }, {
      username: 'mike',
      email: 'mike@mike.com',
      password: 'mike',
      passwordConfirmation: 'mike',
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        note: 'Smashed it.'
      }]
      // practiceType: [{name: 'keiko'}, {name: 'kata'}]
    }, {
      username: 'nic',
      email: 'nic@nic.com',
      password: 'nic',
      passwordConfirmation: 'nic',
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        note: 'Smashed it.'
      }]
      // practiceType: [{name: 'shiai'}, {name: 'kata'}]
    }, {
      username: 'stevan',
      email: 'stevan@stevan.com',
      password: 'stevan',
      passwordConfirmation: 'stevan',
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        note: 'Smashed it.'
      }]
      // practiceType: [{name: 'keiko'}, {name: 'kata'}]
    }, {
      username: 'rich',
      email: 'rich@rich.com',
      password: 'rich',
      passwordConfirmation: 'rich',
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        note: 'Smashed it.'
      }]
      // practiceType: [{name: 'keiko'}, {name: 'kata'}]
    }, {
      username: 'avon',
      email: 'avon@avon.com',
      password: 'avon',
      passwordConfirmation: 'avon',
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        note: 'Smashed it.'
      }]
      // practiceType: [{name: 'shiai'}]
    }, {
      username: 'bianca',
      email: 'bianca@bianca.com',
      password: 'bianca',
      passwordConfirmation: 'bianca',
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        note: 'Smashed it.'
      }]
      // practiceType: [{name: 'keiko'}]
    }]))
    .then(users => console.log(`${users.length} kendoka created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
