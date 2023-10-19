const { Op } = require('sequelize');
const { Country, Activity } = require('../db')


const postActivity = async (req, res) => {
    const { nombre, dificultad, descripcion, duracion, temporada, countries } = req.body
    try {
        if (countries.length == 0) {
            throw new Error(`No indicó paìs para la actividad `);
        }

        const data = await Activity.create({ nombre, dificultad, descripcion, duracion, temporada })
        console.log(countries)

        const countryID = await Country.findAll({
            attributes: ['id'], where: {
                nombre: {
                    [Op.in]: countries
                }
            }
        })
        console.log(countryID);

        countryID.forEach((id) => {
            data.addCountries(id);
        });

        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error al publicar actividad' });
    }
}


module.exports = {
    postActivity
}
