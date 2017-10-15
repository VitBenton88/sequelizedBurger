// // Dependencies
// // =============================================================
var db = require("../models");


// // Routes
// // =============================================================
module.exports = function(app) {

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

    console.log("Devouring ID: " + id);

    db.burgers.update({ devoured: true },
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