var express = require("express");
var path = require("path");
var app = express();

app.set('museaFile', require('./config/musea.json'));
app.set('categorieenFile', require('./config/categorieen.json'));


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 3000));
app.use(express.static('public'))

app.use(require("./routes/root_router"));
app.use(require("./routes/musea_router"));
app.use(require("./routes/categorieen_router"));

app.listen(app.get('port'), function() {
  console.log('Node luistert op poort', app.get('port'));
});