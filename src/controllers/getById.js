const { Op } = require('sequelize');
const { Country, Activity } = require('../db')

const getById = async (req, res) => {
    const { idPais } = req.params

    try {
        if (idPais) {
            const data = await Country.findOne({
                where: {
                    id: {
                        [Op.iLike]: `%${idPais}%`
                    }
                },
                include: {
                    model: Activity
                }
            })
            return res.status(200).json(data);
        }
    }
    catch {
        return res.status(500).json({ message: 'Error al encontrar pais por ID' });
    }
}

module.exports = { getById }
