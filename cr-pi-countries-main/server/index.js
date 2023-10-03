const axios = require("axios");
const server = require("./src/server");
const { conn, Country } = require("./src/db.js");
require("dotenv").config();

const { PORT } = process.env;

conn
  .sync({ force: true })
  .then(async () => {
    const cargueInicial = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/countries`);

        const countriesDB = data.map((element) => ({
          id: element.cca3,
          name: element.name.common,
          flag: element.flags.png,
          region: element.region,
          capital: element.capital ? element.capital[0] : "No registra capital",
          subregion: element.subregion,
          area: element.area,
          population: element.population,
        }));

        await Country.bulkCreate(countriesDB);
        console.log("Se inicia correctamente");
      } catch (error) {
        throw new Error({ error: error.message });
      }
    };

    // Llama a la función cargueInicial
    await cargueInicial();

    // Inicia el servidor después de cargar los datos iniciales
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
