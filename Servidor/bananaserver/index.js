const express = require('express');
const app = express();

var fs = require('fs');

const puerto = 3000;



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(puerto, () => {
    console.log("Servidor Abierto")
});


///----BananaPage Obtiene respuesta

app.get('/status', (req, res) => {
    res.send({
        body: "Fiesta de Banana"
    })
});

//---Crud de producto

app.post('/creaProds/:nombre', (req, res) => {
    let nombre = string(req.params.nombre);
    console.log(nombre);
    fs.writeFile('./productos/' + nombre + '.json', req.body, function (err, result) {
        if (err) {
            console.log('error', err);
            res.send({
                result: "Error"
            });
        }
        if (result) {
            res.send({
                result: "Correcto"
            });
        }
    });
});

app.get('/leeProds/:nombre', (req, res) => {
    let nombre = string(req.params.nombre);
    console.log(nombre);
    var auxjson = require('./productos/' + nombre + '.json');
    if(auxjson==null){
        res.send({
            result: "Error"
        });
    }else{
        res.send({
            result:JSON.stringify(auxjson)
        })
    }
});

app.post('/editaProds/:nombre', (req, res) => {
    let nombre = string(req.params.nombre);
    console.log(nombre);
    fs.writeFile('./productos/' + nombre + '.json', req.body, function (err, result) {
        if (err) {
            console.log('error', err);
            res.send({
                result: "Error"
            });
        }
        if (result) {
            res.send({
                result: "Correcto"
            });
        }
    });
});

app.delete('/borraProds/:nombre', (req, res) => {
    let nombre = string(req.params.nombre);
    console.log(nombre);
    fs.unlink('./productos/' + nombre + '.json', function (err, result) {
        if (err) {
            console.log('error', err);
            res.send({
                result: "Error"
            });
        }
        if (result) {
            res.send({
                result: "Correcto"
            });
        }
    });
});