const express = require('express');
const musctacheExpress = require('mustache-express');
const app = express();

app.engine('html',musctacheExpress());
app.set('view engine','html');
app.set('views',__dirname + '/views');

app.get('/', function (req, res) {
    let usuario ={
    nome: "jota",
    telefone:123123
}
    res.render('index.html',{usuario});
})

app.get('/dados',function(req,res){
    let usuario = {
        nome: req.query.nome,
        telefone: req.query.telefone
    }
})

const PORT = 8080;
app.listen(PORT, function (){
    console.log('app rodando na porta' + PORT);
})