const mongoose = require('mongoose');

const historySchema = new  mongoose.Schema({
  loggedTime: String,
  startTime: Number,
  notes: String
});

const practiceSchema = new mongoose.Schema({
  practiceType: { type: String, required: 'Type of practice is required'},
  description: String,
  venue: String,
  startTime: String,
  history: [ historySchema ]
});

module.exports = mongoose.model('Practice', practiceSchema);
