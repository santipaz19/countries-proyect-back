const { conn } = require('../db');
const { Activity, Country } = require('../db')


const getActivities = async (req, res) => {
    try {
        const data = await Activity.findAll({
            include: {
                model: Country,
                attributes: ['nombre', 'bandera'],
                through: {
                    attributes: []
                }
            }
        })
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: 'Error al encontrar actividades' });
    }
}


module.exports = {
    getActivities
}
