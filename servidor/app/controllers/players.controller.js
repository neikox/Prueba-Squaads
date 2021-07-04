var mongoose = require("mongoose");

var Player = require("../models/players.model");

var playersController = {};

playersController.list = (req,res) => {
    console.log("Entre en los jugadores");
    console.log(req.params);
    Player.find({}).exec((err,players) => {
        if(err) {
            console.log("Error:",err);
            return;
        }
        res.send(players);
    })
}

playersController.show = (req,res) => {
    Player.findOne({_id: req.params.id}).exec((err,teams) => {
        if(err) {
            console.log("Error:",err);
            return;
        }
        res.send(teams);
    })
}

playersController.update = (req, res) => {
    let factura = false;
    if(req.body.importe != 0) {
        factura = true;
    }
    Player.findByIdAndUpdate(req.params.id, {$set: {
        NombreJugador: req.body.NombreJugador,
        id: req.body.id,
        Avatar: req.body.Avatar,
        teamId: req.body.teamId
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

playersController.create = function(req,res) {
    console.log("entre en create");
    Player.find({}).sort({_id:-1}).limit(1).exec(function(err,nuevojugador){
        
        if(err) {console.log('Error:',err);return;}
        nuevojugador[0].NombreJugador = nuevojugador[0].id = nuevojugador[0].Avatar = nuevojugador[0].teamId = '' ;

        res.send(nuevojugador);
    });
};

playersController.grabar = function(req,res) {
    console.log("entrando al grabar");
    var player = new Player({
        _id: new mongoose.Types.ObjectId(),
        NombreJugador: req.body.Nombrejugador,
        id: req.body.id,
        Avatar: req.body.Avatar,
        teamId: req.body.teamId
    });
    player.save(function(err) {
        if (err){
            console.error(err);
            return;
        }
    });
};

playersController.delete = function(req,res) {
    Player.findByIdAndDelete({_id: req.params.id})
    .exec(function(err) {
        console.log(req.params.id);
        if (err) {console.log('Error: ',err);return;}
    });
}

module.exports = playersController;