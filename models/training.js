const mongoose = require('mongoose');

const historySchema = new  mongoose.Schema({
  timeLogged: String,
  startTime: Number,
  notes: String
});

const trainingSchema = new mongoose.Schema({
  trainingType: { type: String, required: 'Type of training is required'},
  description: String,
  venue: String,
  startTime: String,
  history: [ historySchema ]
});

module.exports = mongoose.model('Training', trainingSchema);
