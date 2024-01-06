
class episodesController {
    async index(req, res) { //Listar constas
        const episodes = {
            "name": "john",
            "age": "22"
        };

        return res.status(200).json(episodes);
    }

}

module.exports = new episodesController();