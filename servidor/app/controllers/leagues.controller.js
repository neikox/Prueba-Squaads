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

leaguesController.show = (req,res) => {
    Liga.findOne({_id: req.params.id}).exec((err,leagues) => {
        if(err) {
            console.log("Error:",err);
            return;
        }
        res.send(leagues);
    })
}

module.exports = leaguesController;