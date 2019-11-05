const Sequelize = require("sequelize")
const connection = require("../database/database")

const Register = connection.define('registers', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Register.sync({force:false}).then(() => {
    console.log('Tabela criada')
})

module.exports = Register
