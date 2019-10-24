const express = require("express")
const app = express()



app.get("/", function(req, res){
    res.send("Bem vindo ao meu site!")
})

app.get("/blog/:artigo?", function(req, res){
    let artigo = req.params.artigo

    if(artigo){
        res.send("<h1> Artigo: " + artigo + "</h1>")
    }else{
        res.send("Bem vindo ao meu blog")
    }
})

app.get("/ola/:nome/:empresa", function(req, res){
    let nome = req.params.nome
    let empresa = req.params.empresa
    res.send("<h1> Oi " + nome + " da empresa " + empresa + "</h1>")
})

app.get("/canal/youtube", function(req, res){
    let canal = req.query["canal"]

    if(canal){
        res.send(canal)
    }else{
        res.send("Nenhum canal foi fornecido")
    }
})



app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro")
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})
