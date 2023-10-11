const express = require('express');
const musctacheExpress = require('mustache-express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html', musctacheExpress());
app.set('view engine', 'html');


app.get('/', function (req, res) {
    res.render('index.html');
});

app.post("/dados", function (req, res) {
    res.render("dados", {
        "nome": req.body['nome'],
        "cpf": req.body['cpf'],
        "data": req.body['data'],
        "endereco": req.body['endereco'],
        "uf": req.body['uf'],
        "cep": req.body['cep'],
        "telefone": req.body['telefone'],
        "email": req.body['email'],
        "especialidade": req.body['especialidade'],
        "datah": req.body['datah'],
        "alergias": req.body['alergias'],
        "add": req.body['add'],
    })
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta' + PORT);
})