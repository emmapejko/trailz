const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  event: {
    type: mongoose.Schema.Types.ObjectId, //refers to the event
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  activity: {
    type: String,
    required: true,
    /**
     * enumerations are used with the possibilities is discrete
     * any potential values must be included in array
     */
    enum: ['Hiking', 'Biking', 'Running'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
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