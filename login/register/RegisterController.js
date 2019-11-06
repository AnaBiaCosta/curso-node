const express = require("express")
const router = express.Router()
const Register = require("./Register")


//CADASTRO
router.get("/register", (req, res) => {
    res.render("register")
})

//LOGIN
router.get("/login", (req, res) => {
    res.render("login")
})

//CADASTRO SUCESSO
router.get("/users", (req, res) => {
    Register.findAll().then(registers => {
        res.render("register-sucess", {registers: registers})
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
                res.render("register-sucess", {registers: registers})
            })
        })
    }else{
        res.send(console.log("DEU RUIM"))
    }
})


//LOGIN 
router.post("/login/save", (req, res) => {
    let email = req.body.email
    let password = req.body.password

    Register.findOne({
        where: {email:email, password:password}
    }).then(register =>{
        if(register && password == register.get('password') && email == register.get('email')){
            res.render("login-sucess")
        }else{
            res.render("login-error")
        }
    })
})

module.exports = router