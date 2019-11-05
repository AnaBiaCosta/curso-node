const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const Register = require("./register/Register")
const registerController = require("./register/RegisterController")


//ejs e arquivos estáticos
app.set('view engine', 'ejs')
app.use(express.static('public'))


//body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//banco de dados
connection
    .authenticate()
    .then(() => {
        console.log("CONEXÃO COM O BANCO REALIZADA!")
    })
    .catch((Erro) =>{
        console.log(Erro)
    })


//rotas auxiliares
app.use("/", registerController)


//rota principal
app.get("/", (req, res) =>{
    res.render("index")
})


//servidor
app.listen(8080, () =>{
    console.log("SERVIDOR RODANDO")
})