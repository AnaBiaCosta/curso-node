const Sequelize = require("sequelize")
const connection = require("./database")

const Pergunta = connection.define('perguntas',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },

    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

// sincroniza com o banco de dados
// não vai forçar a criação da tabela casa ela já exista
Pergunta.sync({force:false}).then(() => {
    console.log('Tabela criada')
})

module.exports = Pergunta