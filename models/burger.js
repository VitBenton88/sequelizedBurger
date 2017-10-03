// Dependencies
// =============================================================

var Sequelize = require("sequelize");
var connection = require("../config/connection.js");

var Burger = connection.define("burgers", {
  burger_name: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    date: {
      type: Sequelize.DATE
    }
});

// Syncs with DB
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;
