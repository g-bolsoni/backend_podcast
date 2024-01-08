const express = require('express');
const router = express.Router();
const episodesControllers = require('./controllers/episodesControllers');

router.get('/', episodesControllers.index);
router.get('/episodes', episodesControllers.getEpisodes);
router.get('/episodes/:id', episodesControllers.filterEpisode);

module.exports = router;