var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var leagues = new Schema({
    _id: mongoose.ObjectId,
    NombreLiga: String,
    Identificador: String,
    LogoLiga: String
})

module.exports = mongoose.model('leagues', leagues);