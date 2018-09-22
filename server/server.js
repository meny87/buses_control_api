require('./config/config');

const express = require('express');
const _ = require('lodash');

var bodyParser = require('body-parser');


var app = express();
const port = process.env.PORT;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

var {
  mongoose
} = require('./db/mongoose');
var {
  Cuota
} = require('./models/cuota');
var {
  Penalizacion
} = require('./models/penalizacion');

app.get('/cuotas', (req, res) => {
  Cuota.find().then((cuotas) => {
    res.send({
      cuotas
    });
  }, () => {
    res.status(400).send(e);
  })
});

app.post('/cuotas', (req, res) => {
  var req_body = req.body;
  //res.status(200).send(req.body);

  var cuota = new Cuota({
    unidad: req_body.unidad,
    periodo: req_body.periodo,
    conductor: req_body.conductor,
    usuario: req_body.usuario,
    comentarios: req_body.comentarios
  });

  cuota.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/penalizaciones', (req, res) => {
  Penalizacion.find().then((penalizaciones) => {
    res.send({
      penalizaciones
    });
  }, () => {
    res.status(400).send(e);
  })
});

app.post('/penalizaciones', (req, res) => {
  var req_body = req.body;
  //res.status(200).send(req.body);

  var penalizacion = new Penalizacion({
    unidad: req_body.unidad,
    motivo: req_body.motivo,
    conductor: req_body.conductor,
    usuario: req_body.usuario
  });

  penalizacion.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {
  app
};
