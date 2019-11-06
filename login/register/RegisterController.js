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
            Register.findAll().then(registers => {
                res.render("ok", {registers: registers})
            })
        })
    }else{
        res.send(console.log("DEU RUIM"))
    }
})


router.post("/login", (req, res) => {
    let email = req.body.email
    let password = req.body.password

    Register.findOne({
        where: {email:email, password:password}
    }).then(register =>{
        if(register && password == register.get('password') && email == register.get('email')){
            res.render("users")
        }else{
            res.render("error")
        }
    })
})

module.exports = router