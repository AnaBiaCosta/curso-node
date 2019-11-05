const Sequelize = require("sequelize")

const connection = new Sequelize('login', 'root', 'sebastian01', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection