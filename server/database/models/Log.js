const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId, //refers to user that made the log
    required: true,
  },
  distance: {
    type: Number,
    required: false,
    default: 0
  },
  hours: {
    type: Number,
    required: false,
    default: 0
  },
  minutes: {
    type: Number,
    required: false,
    default: 0
  },
  seconds: {
    type: Number,
    required: false,
    default: 0
  },
});

module.exports = mongoose.model('Log', logSchema);