const express = require("express")
const app = express();


app.get("/", function(req, res) {

    res.send("bem vindo ao sistema do aldo")

})

app.get("/ola/:nome", function(req, res) {

    res.send(req.params.nome)

})

app.get("/canal/youtube", function(req, res) {

    res.send("<h1>bem vindo ao canal</h1>")


})



app.listen(4000, function(erro) {
    if (erro) {
        console.log("ocorreu um erro!")
    } else {
        console.log("servidor iniciado com sucesso!")
    }

})