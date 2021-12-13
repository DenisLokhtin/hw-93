const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  share: {
    type: String,
    required: false,
  },
});

const Event = mongoose.model('Event', EventSchema);
module.exports = Event;