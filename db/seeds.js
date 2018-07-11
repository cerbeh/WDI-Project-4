const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI }= require('../config/environment');
const User = require('../models/user');


mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => User.create([{
      username: 'martin',
      email: 'martin@martin.com',
      password: 'martin',
      passwordConfirmation: 'martin',
      gender: 'Male',
      grade: '8th Dan',
      dob: '1987-10-24',
      height: 200,
      weight: 70,
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        notes: 'Smashed it.'
      },{
        title: 'Practice for semis',
        discipline: 'Kata',
        // date: 2018-07-10,
        duration: 45,
        notes: 'Sesh'
      }]
    }, {
      username: 'othermartin',
      email: 'othermartin@othermartin.com',
      password: 'othermartin',
      passwordConfirmation: 'othermartin',
      gender: 'Male',
      grade: '8th Dan',
      dob: '1987-10-24',
      height: 200,
      weight: 70,
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        notes: 'Smashed it.'
      }]
    }, {
      username: 'Linda Lê',
      email: 'linda@linda.com',
      password: 'linda',
      passwordConfirmation: 'linda',
      gender: 'Female',
      grade: '2nd Dan',
      dob: '1993-08-17',
      height: 157,
      weight: 51,
      sessions: [{
        title: 'Practice at Tora',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        notes: 'Smashed it.'
      }]
    }, {
      username: 'mike',
      email: 'mike@mike.com',
      password: 'mike',
      passwordConfirmation: 'mike',
      gender: 'Male',
      grade: '8th Dan',
      dob: '1987-10-24',
      height: 200,
      weight: 70,
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        notes: 'Smashed it.'
      }]
    }, {
      username: 'nic',
      email: 'nic@nic.com',
      password: 'nic',
      passwordConfirmation: 'nic',
      gender: 'Male',
      grade: '8th Dan',
      dob: '1987-10-24',
      height: 200,
      weight: 70,
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        notes: 'Smashed it.'
      }]
    }, {
      username: 'stevan',
      email: 'stevan@stevan.com',
      password: 'stevan',
      passwordConfirmation: 'stevan',
      gender: 'Male',
      grade: '8th Dan',
      dob: '1987-10-24',
      height: 200,
      weight: 70,
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        notes: 'Smashed it.'
      }]
    }, {
      username: 'rich',
      email: 'rich@rich.com',
      password: 'rich',
      passwordConfirmation: 'rich',
      gender: 'Male',
      grade: '8th Dan',
      dob: '1987-10-24',
      height: 200,
      weight: 70,
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        notes: 'Smashed it.'
      }]
    }, {
      username: 'avon',
      email: 'avon@avon.com',
      password: 'avon',
      passwordConfirmation: 'avon',
      gender: 'Male',
      grade: '8th Dan',
      dob: '1987-10-24',
      height: 200,
      weight: 70,
      sessions: [{
        title: 'Practice for finals',
        discipline: 'Keiko',
        // date: 2018-07-10,
        duration: 60,
        notes: 'Smashed it.'
      }]
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
        notes: 'Smashed it.'
      }]
    }]))
    .then(users => console.log(`${users.length} kendoka created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
