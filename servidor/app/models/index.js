const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const dbLeagues = {};
dbLeagues.mongoose = mongoose;
dbLeagues.url = dbConfig.url;
dbLeagues.tareas = require("./leagues.model.js")(mongoose);

const dbTeams = {};
dbTeams.mongoose = mongoose;
dbTeams.url = dbConfig.url;
dbTeams.tareas = require("./teams.model.js")(mongoose);

const dbPlayers = {};
dbPlayers.mongoose = mongoose;
dbPlayers.url = dbConfig.url;
dbPlayers.tareas = require("./players.model.js")(mongoose);

module.exports = dbLeagues, dbTeams, dbPlayers;