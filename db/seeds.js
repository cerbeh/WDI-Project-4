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
        date: new Date('Mar 20, 2018'),
        duration: 60,
        notes: 'Smashed it.'
      },{
        title: 'Practice for semis',
        discipline: 'Asa-geiko',
        date: new Date('Mar 16, 2018'),
        duration: 45,
        notes: 'Sesh'
      },{
        title: 'I hate mornings',
        discipline: 'Kata',
        date: new Date('Mar 1, 2018'),
        duration: 30,
        notes: 'Morning practice sucks'
      },{
        title: 'Practice for semis',
        discipline: 'Keiko',
        date: new Date('Mar 18, 2018'),
        duration: 50,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Keiko',
        date: new Date('Mar 12, 2018'),
        duration: 45,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Keiko',
        date: new Date('Mar 13, 2018'),
        duration: 45,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Asa-geiko',
        date: new Date('Mar 14, 2018'),
        duration: 45,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Nito',
        date: new Date('Mar 20, 2018'),
        duration: 45,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Asa-geiko',
        date: new Date('Mar 10, 2018'),
        duration: 45,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Asa-geiko',
        date: new Date('Mar 08, 2018'),
        duration: 45,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Asa-geiko',
        date: new Date('Mar 05, 2018'),
        duration: 45,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Asa-geiko',
        date: new Date('Mar 02, 2018'),
        duration: 45,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Kata',
        date: new Date('Feb 26, 2018'),
        duration: 45,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Asa-geiko',
        date: new Date('Feb 24, 2018'),
        duration: 45,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Kata',
        date: new Date('Feb 22, 2018'),
        duration: 45,
        notes: 'Sesh'
      }]
    },{
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
        title: 'Practice for semis',
        discipline: 'Keiko',
        date: new Date('Mar 18, 2018'),
        duration: 50,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Keiko',
        date: new Date('Mar 17, 2018'),
        duration: 120,
        notes: 'Sesh'
      },{
        title: 'Gotta love them gradings',
        discipline: 'Shin-sa',
        date: new Date('Mar 16, 2018'),
        duration: 30,
        notes: 'Can I get 9th Dan?'
      }]
    },{
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
        title: 'Gotta love them gradings',
        discipline: 'Shin-sa',
        date: new Date('Mar 19, 2018'),
        duration: 40,
        notes: 'Can I get 9th Dan?'
      },{
        title: 'Gotta love them gradings',
        discipline: 'Shin-sa',
        date: new Date('Jun 19, 2018'),
        duration: 50,
        notes: 'Can I get 9th Dan?'
      },{
        title: 'Gotta love them gradings',
        discipline: 'Shin-sa',
        date: new Date('Jun 27, 2018'),
        duration: 60,
        notes: 'Can I get 9th Dan?'
      },{
        title: 'Injured had to watch',
        discipline: 'Mitori-geiko',
        date: new Date('Mar 15, 2018'),
        duration: 240,
        notes: 'Solid as a rock'
      },{
        title: 'Injured had to watch',
        discipline: 'Mitori-geiko',
        date: new Date('Mar 16, 2018'),
        duration: 20,
        notes: 'Solid as a rock'
      },{
        title: 'Injured had to watch',
        discipline: 'Mitori-geiko',
        date: new Date('Mar 17, 2018'),
        duration: 60,
        notes: 'Solid as a rock'
      },{
        title: 'Adopted the heavenly kamae',
        discipline: 'Jodan',
        date: new Date('Feb 17, 2018'),
        duration: 5,
        notes: 'Was alright'
      },{
        title: 'Adopted the heavenly kamae',
        discipline: 'Jodan',
        date: new Date('Feb 17, 2018'),
        duration: 45,
        notes: 'Was alright'
      },{
        title: 'Adopted the heavenly kamae',
        discipline: 'Jodan',
        date: new Date('Feb 17, 2018'),
        duration: 50,
        notes: 'Was alright'
      },{
        title: 'Adopted the heavenly kamae',
        discipline: 'Jodan',
        date: new Date('Feb 17, 2018'),
        duration: 30,
        notes: 'Was alright'
      },{
        title: 'Adopted the heavenly kamae',
        discipline: 'Jodan',
        date: new Date('Feb 17, 2018'),
        duration: 15,
        notes: 'Was alright'
      }]
    },{
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
        title: 'Practice for semis',
        discipline: 'Kata',
        date: new Date('Mar 17, 2018'),
        duration: 30,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Kata',
        date: new Date('Mar 17, 2018'),
        duration: 20,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Kata',
        date: new Date('Apr 17, 2018'),
        duration: 15,
        notes: 'Sesh'
      },{
        title: 'Two-sword?!',
        discipline: 'Nito',
        date: new Date('Apr 17, 2018'),
        duration: 15,
        notes: 'Nah fam'
      }]
    },{
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
        title: 'Practice for semis',
        discipline: 'Kata',
        date: 20180710,
        duration: 45,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Shiai',
        date: 20180710,
        duration: 30,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Shiai',
        date: 20180710,
        duration: 45,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Shiai',
        date: 20180710,
        duration: 30,
        notes: 'Sesh'
      },{
        title: 'Practice for semis',
        discipline: 'Shiai',
        date: 20180710,
        duration: 45,
        notes: 'Sesh'
      }]
    },{
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
        title: 'Practice for semis',
        discipline: 'Kata',
        date: 20180710,
        duration: 10,
        notes: 'Sesh'
      }]
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
    .then(users => console.log(`${users.length} kendoka created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
