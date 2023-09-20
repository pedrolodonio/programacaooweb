const express = require ('express');
const mustacheExpress = require ('mustache-express');
const app = express();

app.engine('html',mustacheExpress());
app.set ('view engine','html');
app.set('views',__dirname + '/views');

app.get("/",function (req,res){
    res.render("index.html");
})

app.post("/dados",function (req,res){
    res.render("dados.html",{
        "nome":req.body['Nome'],
        "Endereço":req.body['Endereço'],
        "Telefone":req.body['Telefone'],
        "data":req.body['data']

    });
})

const PORT = 8080;

app.listen(PORT,function(){
    console.log("app rodando na porta",+PORT);
})