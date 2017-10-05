// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

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
      res.render("index", results);
    });
  });

  // create new burger
  app.post("/", function(req, res) {
    db.burgers.create({
      burger_name: req.body.name
    }).then(function(results) {
      // REFRESH PAGE
      res.redirect("/");
    });
  });

  // update burger
  app.put("/:id", function(req, res) {

    var id = req.params.id;
    var devoured = req.body.devoured;

    console.log("Devouring ID: " + id);

    db.burgers.update(req.body.name,
    {
      where: {
        id: id
      }
    }).then(function(results) {
      // REFRESH PAGE
      res.redirect("/");
    });
  });
};