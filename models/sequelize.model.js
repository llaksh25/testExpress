
/* const db = require("../models/db");

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
}); */

module.exports = (sequelize, Sequelize) => {
    const TestSequelize = sequelize.define("test_sequelize", {
        sequelize_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
        user_name: {
            type: Sequelize.STRING
        },
        email_address: {
            type: Sequelize.STRING
        }
    },
    {timestamps:false,} // disable CreatedAt, UpdatedAt
    );
  
    return TestSequelize;
  };
