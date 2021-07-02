var express = require("express");
var router = express.Router();
const leagues = require("../controllers/leagues.controller");

router.get("/", leagues.list);

// router.get("/ficha/nueva", tareas.create);

// router.post("/nueva", tareas.grabar);

router.get("/ficha/:id", leagues.show);

// router.post("/save/:id", tareas.update);

// router.get("/borrar/:id", tareas.delete);

module.exports = router;