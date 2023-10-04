const express = require('express');
const musctacheExpress = require('mustache-express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.engine('html',musctacheExpress());
app.set('view engine','html');


app.get('/', function (req, res){
    res.render('index.html');
});

app.post("/dados", function (req, res){
    res.render("dados", {
        "nome": req.body['nome'],
        "endereco": req.body['endereco'],
        "telefone": req.body['telefone'],
        "data": req.body['data'],
    })
 });

const PORT = 8080;
app.listen(PORT, function (){
    console.log('app rodando na porta' + PORT);
})