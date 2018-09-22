const mongoose = require('mongoose');

var PenalizacionSchema = new mongoose.Schema({
  unidad: {
    type: Number,
    required: true
  },
  motivo: {
    type: String,
    required: true
  },
  conductor: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  usuario: {
    type: String,
    required: true
  }
});

var Penalizacion = mongoose.model('Penalizacion', PenalizacionSchema);
module.exports = {Penalizacion}
