const express = require('express');
const router = express.Router();
const episodesControllers = require('./controllers/episodesControllers');

router.get('/', episodesControllers.index);
router.get('/episodes', episodesControllers.getEpisodes);

module.exports = router;