const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get("/:nome/:lang", (req, res) => {

    let nome = req.params.nome
    let lang = req.params.lang
    let exibirMsg = false


    let produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome:"Coca-Cola", preco: 4},
        {nome:"Leite", preco: 1.45},
        {nome:"Carne", preco: 15},
        {nome:"Redbull", preco: 6},
        {nome:"Nescau", preco: 4}
    ]
        

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: 'Easynvest',
        idade: 18,
        msg: exibirMsg,
        produtos: produtos
    })
})

app.get("/home", (req, res) => {
    res.render("home")
})


app.listen(8080, ()=>{
    console.log("App rodando!")
})