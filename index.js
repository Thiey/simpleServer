const express = require('express');
const app = express();
const router = express.Router();
const port = 7089;

//Ejemplo basico con respuestas de servidor para testeo de herramientas para DevOps

app.get('/',function (req,res){
    res.send(200);
});

app.get('/ruta',function (req,res){
    res.send('Respuesta de la ruta "/ruta"');
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`)
});

