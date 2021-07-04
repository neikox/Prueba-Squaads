var mongoose = require("mongoose");

var Liga = require("../models/leagues.model");

var leaguesController = {};

leaguesController.list = (req,res) => {
    console.log("Entré en las ligas");
    Liga.find({}).exec((err,ligas) => {
        if(err) {
            console.log("Error:",err);
            return;
        }
        res.send(ligas);
    })
}

module.exports = leaguesController;