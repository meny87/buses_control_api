const mongoose = require('mongoose');

var CuotaSchema = new mongoose.Schema({
  unidad: {
    type: Number,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  periodo: {
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
  },
  comentarios: {
    type: String
  }
});

var Cuota = mongoose.model('Cuota', CuotaSchema);
module.exports = {Cuota};
