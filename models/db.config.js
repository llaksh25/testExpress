/* module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "testdb"
  }; */

//MySQL
/* module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}; */

//Postgres
module.exports = {
  HOST: "localhost",
  USER: "postgres",
  //USER: "root",
  PASSWORD: "root",
  DB: "test_postgres",
  dialect: "postgres",
  //port: "5432",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};