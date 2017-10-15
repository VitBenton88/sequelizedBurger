// Dependencies
// =============================================================
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

    // Get all burgers
  app.get("/", function(req, res) {
    db.burgers.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.render("index", {burgers: results});
    });
  });

};