const express = require("express");
const tels = require("./data/phones.json")
const app = express();

const port = 5001

app.get('/', function (req, res) {
    res.send('------Saluditos desde express');
  });

app.get('/telefonos', ( req, res )=>{
    res.json( tels )
})

app.listen(port, () => {
 console.log("El servidor está inicializado en el puerto "+port);
});

