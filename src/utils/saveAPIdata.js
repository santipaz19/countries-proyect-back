const axios = require("axios");
const { Country } = require('../db.js');

const getAPIdata = async () => {
    const dataCountry = await axios.get(`http://localhost:5000/countries`);

    const dataFilter = dataCountry.data.map((country) => {
        return {
            id: country.cca3 !== undefined ? country.cca3 : "Doesn't have",
            nombre: country.translations.spa.common,
            bandera: country.flags.png, // Cambiar a country.flags.png
            continente: country.region,
            capital: country.capital !== undefined ? country.capital[0] : "Doesn't have",
            // capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            poblacion: country.population
        };
    });
    return dataFilter;
};

const saveAPIdata = async (req, res) => {
    try {
        let data = await getAPIdata();

        // Insertar los datos en la base de datos
        await Country.bulkCreate(data);
        console.log('se cargo')
        res.status(200).json({ message: 'Datos guardados exitosamente.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al guardar los datos.' });
    }
};

module.exports = {
    saveAPIdata,
    getAPIdata
};