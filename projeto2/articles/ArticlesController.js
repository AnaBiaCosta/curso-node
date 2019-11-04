const express = require("express")
const router = express.Router()
const Category = require("../categories/Category")
const Article = require("./Article")
const slugify = require("slugify")



//TODOS OS ARTIGOS
router.get("/admin/articles", (req, res) =>{
    Article.findAll().then((articles) => {
        res.render("admin/articles/index", {
            articles: articles
        })
    })
})


//NOVO ARTIGO
router.get("/admin/articles/new", (req, res) =>{
    Category.findAll().then(categories => {
        res.render("admin/articles/new", {categories: categories})
    })
})


//ROTA PARA SALVAR O ARTIGO
router.post("/articles/save", (req, res) => {
    let title = req.body.title
    let body = req.body.body
    let category = req.body.category
    console.log("sou a categoria " + category)

    if(title != undefined){
        Article.create({
            title: title,
            slug: slugify(title),
            body: body,
            categoryId: category
        }).then(() => {
            res.redirect("/admin/articles")
        })
    }else{
        res.redirect("/admin/articles/new")
    }
})


//DELETAR UM ARTIGO
router.post("/articles/delete", (req, res) => {
    let id = req.body.id

    if(id != undefined){
        if(!isNaN(id)){
            Article.destroy({
                where: {id:id}
            }).then(() => {
                res.redirect("/admin/articles")
            })
        }else{ //não é número
            res.redirect("/admin/articles")
        }
    }else{ //null
        res.redirect("/admin/articles")
    }
})


//EDITAR UM ARTIGO
router.get("/admin/articles/edit/:id", (req, res) => {
    let id = req.params.id

    if(isNaN(id)){
        res.redirect("/admin/articles")
    }

    Article.findByPk(id).then(article => {
        if(article != undefined){
            res.render("admin/articles/edit", {article: article})
        }else{
            res.redirect("/admin/articles")
        }
    }).catch(erro => {
        res.redirect("/admin/articles")
    })
})


//SALVAR EDIÇÃO
router.post("/articles/update", (req, res) => {
    let id = req.body.id
    let title = req.body.title
    let body = req.body.body

    Article.update({title:title, slug:slugify(title), body:body},{
        where:{id: id}
    }).then(() => {
        res.redirect("/admin/articles")
    })
})






module.exports = router
