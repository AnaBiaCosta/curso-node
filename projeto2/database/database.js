const Sequelize = require("sequelize")

const connection = new Sequelize('guiapress', 'root', 'sebastian01', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection