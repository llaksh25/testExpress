const db = require("../models/db");
const User = db.tutorials;

module.exports = (sequelize, Sequelize) => {
    const countrySequelize = sequelize.define("country", {
        country_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
        country: {
            type: Sequelize.STRING
        }
    },
    {timestamps:false,} // disable CreatedAt, UpdatedAt
    );
    //countrySequelize.hasOne(User)
   // countrySequelize.belongsTo(User, {foreignKey: 'country_id'});
  
    return countrySequelize;
  };