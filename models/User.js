const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  artist_id: Number,
  name: String,
  nameWithoutThePrefix: String,
  useThePrefix: Boolean
})

const songListSchema = new Schema({
  songsterr_id: Number,
  title: String,
  artist: [artistSchema],
  chordsPresent: Boolean,
  url: String
})

const beatsListSchema = new Schema({
  title: String,
  description: String,
  beats_url: String
})

const commentsSchema = new Schema({
  songsterr_id: Number,
  content: String,
  // timestamp: Timestamp
})

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
  username: String,
  primary_inst: String,
  image_url: String,
  comments: [commentsSchema],
  song_list: [songListSchema],
  beats_list: [beatsListSchema]
});


module.exports = mongoose.model('User', userSchema);
