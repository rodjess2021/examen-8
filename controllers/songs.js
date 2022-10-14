const mongoose = require('mongoose');
const Song = require('../models/Song');

const findAllSongs = (req, res) => {
    Song.fin((err, songs) => {
        err && res.send(500).send(err.message);

        res.status(200).json(songs);
    })
}

const findById = (req, res) => {
    Song.findById(req.params.id, (err, song) => {
        err && res.status(500).send(err.message);

        res.status(200).json(song);
    })
}

const addSong = (req, res) => {
    let song = new Song({
        id: req.body.id,
        name: req.body.name,
        artist: req.body.artist,
        album: req.body.album,
        year: req.body.year,
        genre: req.body.genre,
        duration: req.body.duration,
    });

    song.save((err, usr) => {
        err && res.status(500).send(err.message);

        res.status(200).json(usr);
    });
};

module.exports = { findAllSongs, findById, addSong};