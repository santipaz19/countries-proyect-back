const { Op } = require('sequelize');
const { Country, Activity } = require('../db')

const getAllCountry = async (req, res) => {
    const { name } = req.query

    try {
        if (!name) {
            const data = await Country.findAll({
                include: {
                    model: Activity,
                    attributes: ['nombre', 'dificultad', 'duracion', 'temporada'],
                    through: {
                        attributes: []
                    }
                }
            })
            return res.status(200).json(data);
        }
        else {
            const data = await Country.findOne({
                where: {
                    nombre: {
                        [Op.iLike]: `%${name}`
                        // [Op.iLike]: `%${name}%`
                    }
                }, include: {
                    model: Activity
                }
            })
            return res.status(200).json(data);
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Error al encontrar país', error: error.message });
    }
}

module.exports = {
    getAllCountry
}