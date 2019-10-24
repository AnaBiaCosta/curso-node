const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database")
const Pergunta = require("./database/Pergunta")


app.set('view engine', 'ejs')
app.use(express.static('public'))



// database - promise
connection
    .authenticate()
        .then(() => {
            console.log("Conexão com o banco realizada!")
        })
        .catch((msgErro) => {
            console.log(msgErro)
        })



// permite que os dados sejam traduzidos para estrutura javascript
app.use(bodyParser.urlencoded({ extends: false }))
app.use(bodyParser.json())



// rotas
app.get("/", (req, res) => {
    Pergunta.findAll({raw:true, order:[
        ['id', 'DESC']
    ]}).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
        })
     })
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta", (req, res) => {
    let titulo = req.body.titulo
    let descricao = req.body.descricao

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/")
    })
})


app.get("/pergunta/:id", (req, res) => {
    let id = req.params.id
    Pergunta.findOne({
        where: {id: id} //id da tabela seja igual a variável id
    }).then(pergunta => {
        if(pergunta != undefined){
            res.render("pergunta")
        }else{
            res.redirect("/")
        }
    })
})



// servidor
app.listen(8080, () => {
    console.log("App rodando!")
})