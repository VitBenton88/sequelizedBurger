module.exports = function(sequelize, DataTypes) {

    var Burger = sequelize.define("burgers", {
            burger_name: {
                type: DataTypes.STRING,
                allowNull: false,

            },
            devoured: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            },
            updatedAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            }
        })
          return Burger;
      };