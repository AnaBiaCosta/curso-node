const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'root', 'sebastian01', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection