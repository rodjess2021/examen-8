const SongController = require('../controllers/songs');
const express = require('express');

const router = express.Router();

router.get("/all", SongController.findAllSongs);

router.get('/:id', SongController.findById);

router.post('/add', SongController.addSong);

module.exports = router;