var express = require("express");
var router = express.Router();
const players = require("../controllers/players.controller");

router.get("/:teamId", players.list);

router.get("/ficha/nueva", players.create);

router.post("/nueva", players.grabar);

router.get("/ficha/:_id", players.show);

router.post("/save/:_id", players.update);

router.post("/search/:NombreJugador", players.search);

router.get("/borrar/:_id", players.delete);

module.exports = router;