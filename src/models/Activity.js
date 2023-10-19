const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificultad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        temporada: {
            type: DataTypes.ENUM('Verano', 'Otonio', 'Invierno', 'Primavera')
        }
    }, { timestamps: false });
};