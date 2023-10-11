const { conn } = require('../db');
const { Activity } = require('../db')


const getActivities = async (req, res) => {
    try {
        const data = await Activity.findAll()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: 'Error al encontrar actividades' });
    }
}


module.exports = {
    getActivities
}
