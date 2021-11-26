/* const mysql = require("mysql");
const dbConfig = require("./db.config");

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;
 */

const dbConfig = require("./db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: process.env.POSTGRES_DB || dbConfig.HOST,
 // host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  //operatorsAliases: false,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

//imported package Sequelize
db.Sequelize = Sequelize;
//configured sequelize
db.sequelize = sequelize;
//Models
//db.tutorials  = require("./sequelize.model")(sequelize, Sequelize);
db.users  = require("./users.model")(sequelize, Sequelize);
//db.Countrys  = require("./country.model")(sequelize, Sequelize);
//db.Roles  = require("./role.model")(sequelize, Sequelize);

//Relations
/* db.users.belongsTo(db.Countrys, {foreignKey: 'country_id'});
db.Countrys.hasMany(db.users, {foreignKey: 'country_id'});
db.users.belongsTo(db.Roles, {foreignKey: 'role_id'});
db.Roles.hasMany(db.users, {as: 'follower', foreignKey: 'role_id'}); */

module.exports = db;