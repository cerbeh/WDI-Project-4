const mongoose = require('mongoose');

const historySchema = new  mongoose.Schema({
  startDate: String,
  startTime: Number,
  notes: String
});

const practiceSchema = new mongoose.Schema({
  title: String,
  practiceType: String,
  description: String,
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  history: [ historySchema ]
});

module.exports = mongoose.model('Practice', practiceSchema);


//virtual for notes
