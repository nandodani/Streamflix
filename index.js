var PORT = 3000;
const express = require("express");
const app = express();
const rotas = require("./routes/main.route");
var authenticateController=require('./controllers/authenticate.controller');
var registerController=require('./controllers/register.controller');


app.use("/pages", express.static("./views/pages"));
app.use("/images", express.static("./assets/images"));
app.use("/assets", express.static("./assets"));
app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));
app.use("/js", express.static("./node_modules/jquery/dist"));

app.use(express.urlencoded({ extended: true }));
app.use("/", rotas);



app.post('/register',registerController.register);
app.post('/login',authenticateController.authenticate);

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Servidor iniciado na porta: ", PORT);
});


 
