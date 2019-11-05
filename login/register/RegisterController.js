const express = require("express")
const router = express.Router()
const Register = require("./Register")

//TODOS OS USUÁRIOS
router.get("/users", (req, res) => {
    Register.findAll().then(registers => {
        res.render("users", {registers: registers})
    })
})


//SALVAR NOVO USÁRIO
router.post("/register/save", (req, res) =>{
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password

    if(name != undefined && email != undefined && password != undefined && name != "" && email != "" & password != ""){
        Register.create({
            name: name,
            email: email,
            password: password
        }).then(() =>{
            res.send(console.log("DADOS ENVIADOS"))
        })
    }else{
        res.send(console.log("DEU RUIM"))
    }
})


router.post("/login", (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password

    Register.findAll().then(registers => {
        res.render("users", {registers: registers})
    })
})

module.exports = router