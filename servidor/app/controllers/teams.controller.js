var mongoose = require("mongoose");

var Team = require("../models/teams.model");

var teamsController = {};

teamsController.list = (req,res) => {
    console.log("Entre en los equipos");
    console.log(req.params);
    Team.find({Liga: req.params.Liga}).exec((err,teams) => {
        if(err) {
            console.log("Error:",err);
            return;
        }
        res.send(teams);
    })
}

teamsController.show = (req,res) => {
    Team.findOne({_id: req.params.id}).exec((err,teams) => {
        if(err) {
            console.log("Error:",err);
            return;
        }
        res.send(teams);
    })
}

teamsController.update = (req, res) => {
    let factura = false;
    if(req.body.importe != 0) {
        factura = true;
    }
    Team.findByIdAndUpdate(req.params.id, {$set: {
        NombreEquipo: req.body.NombreEquipo,
        id: req.body.id,
        LogoEquipo: req.body.LogoEquipo,
        Liga: req.body.Liga
    }},{new:false,runValidators:true},
    (err, articulo) => {
        if(err) {
            var mensaje= (JSON.stringify(err.errors,null,"\t"));
            res.send(mensaje);
        }
        else {
            res.send({"mensaje": "Registro grabado correctamente"});
        }
    });
}

teamsController.create = function(req,res) {
    console.log("entre en create");
    Team.find({}).sort({_id:-1}).limit(1).exec(function(err,nuevoEquipo){
        
        if(err) {console.log('Error:',err);return;}
        nuevoEquipo[0].NombreEquipo = nuevoEquipo[0].id = nuevoEquipo[0].LogoEquipo = nuevoEquipo[0].Liga = '' ;

        res.send(nuevoEquipo);
    });
};

teamsController.grabar = function(req,res) {
    console.log("entrando al grabar");
    var tarea = new Team({
        _id: new mongoose.Types.ObjectId(),
        NombreEquipo: req.body.NombreEquipo,
        id: req.body.id,
        LogoEquipo: req.body.LogoEquipo,
        Liga: req.body.Liga
    });
    tarea.save(function(err) {
        if (err){
            console.error(err);
            return;
        }
    });
};

teamsController.delete = function(req,res) {
    Team.findByIdAndDelete({_id: req.params.id})
    .exec(function(err) {
        console.log(req.params.id);
        if (err) {console.log('Error: ',err);return;}
    });
}

module.exports = teamsController;