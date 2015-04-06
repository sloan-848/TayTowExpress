var mongoose = require('mongoose');

var VotesSchema = new mongoose.Schema({
  email: String,
  vote_president: String,
  vote_vice_president: String,
  vote_treasurer: String,
  vote_webmaster: String,
  updated_at: {
     type: Date, default: Date.now
  },
});

module.exports = mongoose.model('Votes', VotesSchema);
