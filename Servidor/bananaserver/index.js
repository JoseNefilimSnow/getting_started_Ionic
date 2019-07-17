const express = require('express');
const app = express();
const puerto = 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.listen(puerto,()=>{
    console.log("Servidor Abierto")
});

app.get('/status',(req,res)=>{
    res.send({body:"Fiesta de Banana"})
})