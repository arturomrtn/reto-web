const express = require("express");
const tels = require("./data/phones.json")
const cors = require('cors');
const app = express();

app.use(cors());
app.options('*', cors());

const port = 5001

app.get('/', function (req, res) {
    res.send('Saludos desde express');
  });

app.get('/telefonos', ( req, res )=>{
    res.json(tels)
})

app.use('/images', express.static('images'));


app.listen(port, () => {
 console.log("The server is initialized on port"+port);
});
