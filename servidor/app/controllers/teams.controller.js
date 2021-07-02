var mongoose = require("mongoose");

var Team = require("../models/teams.model");

var teamsController = {};

teamsController.list = (req,res) => {
    console.log("Entre en los equipos");
    Team.find({Liga: req.params.Identificador}).exec((err,teams) => {
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
        tecnico: req.body.tecnico,
        fecha: req.body.fecha,
        cliente: req.body.cliente,
        descripcion: req.body.descripcion,
        facturable: factura,
        importe: req.body.importe
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
    Team.find({}).sort({_id:-1}).limit(1).exec(function(err,nuevoArticulo){
        
        if(err) {console.log('Error:',err);return;}
        nuevoArticulo[0].fecha = nuevoArticulo[0].descripcion = nuevoArticulo[0].cliente = '' ;
        nuevoArticulo[0].importe = 0;
        nuevoArticulo[0].facturable = false;

        res.send(nuevoArticulo);
    });
};

teamsController.grabar = function(req,res) {
    console.log("entrando al grabar");
    let factura = false;
    if(req.body.importe != 0) {
        factura = true;
    }
    var tarea = new Team({
        _id: new mongoose.Types.ObjectId(),
        tecnico: req.body.tecnico,
        fecha: req.body.fecha,
        cliente: req.body.cliente,
        descripcion: req.body.descripcion,
        facturable: factura,
        importe: req.body.importe
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