var express = require("express");
var musea = express.Router();

musea.get('/items/:id', function(req, res) {
  var museaFile = req.app.get('museaFile');
  var id = req.params.id;
  var teller = 0;
  var item = "";
  while (teller < museaFile.musea.length ) {
    if (museaFile.musea[teller].id == id) {
      item = museaFile.musea[teller];
    }
    teller++;
  }
  if (item !== "") {
    res.render("musea", {
      item: item
    });
  } else {
    res.render("404", {});
  }
});

module.exports = musea;
