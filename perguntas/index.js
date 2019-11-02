const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {

    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    res.render("index", {



        nome: nome,
        lang: lang,
        empresa: "guia do programador",
        inscrito: 800
        msg: exibirMsg

    })

});


app.listen(4040, () => { console.log("app rodando"); });