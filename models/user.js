const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const moment = require('moment');

const userSchema = new mongoose.Schema({
  username: { type: String, required: 'This field is required' },
  email: { type: String, required: 'This field is required' },
  password: { type: String, required: true},
  gender: { type: String, enum: ['Male', 'Female']},
  grade: { type: String, enum: ['1st Kyu', '1st Dan', '2nd Dan', '3rd Dan', '4th Dan', '5th Dan', '6th Dan', '7th Dan', '8th Dan']},
  dob: Date,
  height: Number,
  weight: Number
},{
  id: false
});

userSchema.virtual('sessions', {
  localField: '_id',
  foreignField: 'creator',
  ref: 'Session'
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

module.exports = mongoose.model('User', userSchema);
