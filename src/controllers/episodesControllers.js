class episodesController {
    async index(req, res) { //Listar constas
        return res.status(200).json({ "message": "Hello to my api-podcast" });
    }
    async getEpisodes(req, res) { //Listar constas
        const data = require('../episodes.json');
        return res.status(200).json(data.episodes);
    }

}

module.exports = new episodesController();