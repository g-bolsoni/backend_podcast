class episodesController {
    async index(req, res) { //Listar constas
        return res.status(200).json({ "message": "Hello to my api-podcast" });
    }
    async getEpisodes(req, res) { //List episodes
        const data = require('../episodes.json');
        return res.status(200).json(data.episodes);
    }

    async filterEpisode(req, res) { //Filter episodes
        const data = require('../episodes.json');
        const string_filter = req.params.id;
        let item_filtered = {
            "message": "Nenhum dado encontado!"
        };

        data.episodes.filter((item) => {
            if (item.id == string_filter) {
                item_filtered = item;
            }
        });

        return res.status(200).json(item_filtered);

    }


}
module.exports = new episodesController();