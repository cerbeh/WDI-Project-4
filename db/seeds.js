const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI }= require('../config/environment');
const User = require('../models/user');
const Session = require('../models/session');


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
      weight: 70
    },{
      username: 'othermartin',
      email: 'othermartin@othermartin.com',
      password: 'othermartin',
      passwordConfirmation: 'othermartin',
      gender: 'Male',
      grade: '8th Dan',
      dob: '1987-10-24',
      height: 200,
      weight: 70
    },{
      username: 'Linda Lê',
      email: 'linda@linda.com',
      password: 'linda',
      passwordConfirmation: 'linda',
      gender: 'Female',
      grade: '2nd Dan',
      dob: '1993-08-17',
      height: 157,
      weight: 51
    },{
      username: 'mike',
      email: 'mike@mike.com',
      password: 'mike',
      passwordConfirmation: 'mike',
      gender: 'Male',
      grade: '8th Dan',
      dob: '1987-10-24',
      height: 200,
      weight: 70
    },{
      username: 'nic',
      email: 'nic@nic.com',
      password: 'nic',
      passwordConfirmation: 'nic',
      gender: 'Male',
      grade: '8th Dan',
      dob: '1987-10-24',
      height: 200,
      weight: 70
    },{
      username: 'stevan',
      email: 'stevan@stevan.com',
      password: 'stevan',
      passwordConfirmation: 'stevan',
      gender: 'Male',
      grade: '8th Dan',
      dob: '1987-10-24',
      height: 200,
      weight: 70
    },{
      username: 'rich',
      email: 'rich@rich.com',
      password: 'rich',
      passwordConfirmation: 'rich',
      gender: 'Male',
      grade: '8th Dan',
      dob: '1987-10-24',
      height: 200,
      weight: 70
    },{
      username: 'avon',
      email: 'avon@avon.com',
      password: 'avon',
      passwordConfirmation: 'avon',
      gender: 'Male',
      grade: '8th Dan',
      dob: '1987-10-24',
      height: 200,
      weight: 70
    }]))
    .then(users => {
      console.log(`${users.length} kendoka created`);
      return Session.create([{
        title: 'Practice for finals',
        discipline: 'Keiko',
        date: 20180710,
        duration: 60,
        notes: 'Smashed it.',
        creator: users[0]
      },{
        title: 'Practice for semis',
        discipline: 'Keiko',
        date: 20180710,
        duration: 45,
        notes: 'Sesh',
        creator: users[0]
      },{
        title: 'Practice for semis',
        discipline: 'Keiko',
        date: 20180710,
        duration: 50,
        notes: 'Sesh',
        creator: users[0]
      },{
        title: 'Practice for semis',
        discipline: 'Keiko',
        date: 20180710,
        duration: 50,
        notes: 'Sesh',
        creator: users[0]
      },{
        title: 'Practice for semis',
        discipline: 'Kata',
        date: 20180710,
        duration: 50,
        notes: 'Sesh',
        creator: users[0]
      },{
        title: 'Practice for semis',
        discipline: 'Kata',
        date: 20180710,
        duration: 50,
        notes: 'Sesh',
        creator: users[0]
      },{
        title: 'Practice for semis',
        discipline: 'Kata',
        date: 20180710,
        duration: 45,
        notes: 'Sesh',
        creator: users[0]
      },{
        title: 'Practice for semis',
        discipline: 'Shiai',
        date: 20180710,
        duration: 30,
        notes: 'Sesh',
        creator: users[0]
      },{
        title: 'Practice for semis',
        discipline: 'Shiai',
        date: 20180710,
        duration: 45,
        notes: 'Sesh',
        creator: users[0]
      },{
        title: 'Practice for semis',
        discipline: 'Shiai',
        date: 20180710,
        duration: 30,
        notes: 'Sesh',
        creator: users[0]
      },{
        title: 'Practice for semis',
        discipline: 'Shiai',
        date: 20180710,
        duration: 45,
        notes: 'Sesh',
        creator: users[0]
      },{
        title: 'Practice for semis',
        discipline: 'Kata',
        date: 20180710,
        duration: 10,
        notes: 'Sesh',
        creator: users[0]
      }]);
    })
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
