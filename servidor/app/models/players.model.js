var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var players = new Schema({
    _id: mongoose.ObjectId,
    NombreJugador: String,
    id: String,
    Avatar: String,
    teamId: String
})

module.exports = mongoose.model('players', players);