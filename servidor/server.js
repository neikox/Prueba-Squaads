const express = require("express");
const cors = require("cors");
const inicial = require("./app/routes/leagues.routes");

const app = express();

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("Conectado a la base de datos");
    })
    .catch(err => {
        console.log("Imposible conectar con la base de datos", err);
        process.exit();
    })
app.use('/', inicial);

const PORT = process.env.PORT || 8060;
app.listen(PORT, () => {
    console.log("Servidor ejecutando en el puerto:", PORT);
});