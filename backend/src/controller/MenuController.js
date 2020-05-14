const axios = require("axios");

module.exports = {
  async get(req, res) {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/`
    );

    const serie = response.data.results.map((e) => {
      const filter = {
        name: e.name,
        status: e.status,
        species: e.species,
        gender: e.gender,
        origin: e.origin,
        image: e.image,
        isAlive: e.status === "Alive" ? 0 : e.status === "Dead" ? 1 : 2,
      };
      return filter;
    });

    return res.json(serie);
  },
};
