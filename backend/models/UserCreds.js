const mongoose = require('mongoose');

const UserCreds = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  senderEmail: {
    type: String,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  credentials: {
    type: [[String]],
    required: true,
  },
});

module.exports = mongoose.model('UserCreds', UserCreds);
