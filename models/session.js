const mongoose = require('mongoose');
const moment = require('moment');

const sessionSchema = new mongoose.Schema({
  title: String,
  discipline: { type: String, required: true },
  date: Date,
  duration: Number,
  notes: String,
  creator: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

sessionSchema.path('date')
  .get(function formatDate(date) {
    return moment(date).format('YYYY-MM-DD');
  });

sessionSchema.set('toJSON', {
  virtuals: true,
  getters: true
});

// sessionSchema
//   .virtual('extraNotes')
//   .get(function(){
//     if (this.notes) {
//       return this.notes.length > 100 ? this.notes.substring(0, 100) + '...' : this.notes;
//     }
//   });

module.exports = mongoose.model('Session', sessionSchema);
