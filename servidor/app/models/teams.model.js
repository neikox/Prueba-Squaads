var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var teams = new Schema({
    _id: Number,
    NombreEquipo: String,
    id: String,
    LogoEquipo: String,
    Liga: String
})

module.exports = mongoose.model('teams', teams);