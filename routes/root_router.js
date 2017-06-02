var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    musea: req.app.get('museaFile').musea,
    categorieen: req.app.get('categorieenFile').categorieen
  });
});

module.exports = root;
