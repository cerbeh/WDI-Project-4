const mongoose = require('mongoose');

const historySchema = new  mongoose.Schema({
  startDate: String,
  startTime: Number,
  notes: String
});

const practiceSchema = new mongoose.Schema({
  practiceType: { type: String, required: 'Type of practice is required'},
  description: String,
  venue: String,
  startDate: String,
  history: [ historySchema ]
});

module.exports = mongoose.model('Practice', practiceSchema);


//virtual for notes
