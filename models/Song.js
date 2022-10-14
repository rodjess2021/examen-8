const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    id: { type: Number },
    name: {type: String },
    artist: {type: String },
    album: {type: String },
    year: {type: String },
    genre: { type: String },
    duration: { type: String },
});

module.exports = Song = mongoose.model('Song', SongSchema); 