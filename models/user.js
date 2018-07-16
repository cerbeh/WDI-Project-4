const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const moment = require('moment');
const  _ = require('lodash');

const sessionSchema = new mongoose.Schema({
  title: { type: String, required: 'Please provide a title' },
  discipline: { type: String, enum: ['Kata', 'Keiko', 'Shiai', 'Jodan', 'Nito', 'Shin-sa', 'Mitori-geiko', 'Asa-geiko'], required: 'Please provide a discipline' },
  date: Date,
  duration: Number,
  notes: String
},{
  id: false
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: 'This field is required'},
  email: { type: String, required: 'This field is required', unique: true },
  password: { type: String, required: 'This field is required'},
  gender: { type: String, enum: ['Male', 'Female', 'Non-binary', 'Transgender', 'Other', 'Prefer not to say']},
  grade: { type: String, enum: ['1st Kyu', '1st Dan', '2nd Dan', '3rd Dan', '4th Dan', '5th Dan', '6th Dan', '7th Dan', '8th Dan']},
  dob: Date,
  height: Number,
  weight: Number,
  created: { type: Date, default: new Date()},
  sessions: [sessionSchema]
},{
  id: false
});


userSchema.path('dob')
  .get(function formatDate(dob) {
    return moment(dob).format('YYYY-MM-DD');
  });

userSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(doc, json) {
    delete json.password;
    return json;
  }
});

//
// userSchema
//   .virtual('totalPracticed')
//   .get(function () {
//     if (this.sessions) {
//       const totalPracticedArray = this.sessions.map(entry => {
//         return entry.totalPracticed;
//       });
//       return totalPracticedArray.reduce((a, i) => a + i, 0);
//     }
//   });


userSchema.virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPasswordsMatch(next) {
  if(this.isModified('password') && this._passwordConfirmation !== this.password) {
    this.invalidate('passwordConfirmation', 'doest not match');
  }
  next();
});

userSchema.pre('save', function hashPassword(next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.virtual('practicedDisciplines')
  .get(function() {
    return _.uniq(this.sessions.map(session => {
      return session.discipline;
    }))
      .map(discipline => {
        return {
          
          discipline: discipline,

          sessions: this.sessions
            .filter(session => {
              if(session.discipline === discipline) return session;
            })
            .sort((a, b) => {
              return new Date(a.date) - new Date(b.date);
            })
            .map(session => {
              return {
                date: session.date,
                duration: session.duration
              };
            })
        };
      });
  });

sessionSchema.path('date')
  .get(function formatDate(date) {
    return moment(date).format('YYYY-MM-DD');
  });

sessionSchema.set('toJSON', {
  virtuals: true,
  getters: true
});

module.exports = mongoose.model('User', userSchema);
