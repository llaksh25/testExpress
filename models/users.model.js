module.exports = (sequelize, Sequelize) => {

  const userSequelize =  sequelize.init({
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'dog',
    timestamps: false
  })

  return userSequelize;

};

//POSTGRES

/* const { Model } = require('sequelize'); 
 
 module.exports = (sequelize, Sequelize) => {

  class userSequelize extends Model {}

  userSequelize.init({
      user_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
      name: {
          type: Sequelize.STRING
      },
      age: {
          type: Sequelize.STRING
      },
      email_address: {
          type: Sequelize.STRING
      },
      ph_number: {
          type: Sequelize.STRING
      },
      country_id: {
          type: Sequelize.INTEGER
      },
      role_id: {
          type: Sequelize.INTEGER
      }
  },
  
  {sequelize, timestamps:false, modelName: 'dog'} // disable CreatedAt, UpdatedAt
  );
  
  return userSequelize;
}; */


//CORE SQL
/* const sql = require("../models/db");

const User = function(data) {
    this.user_name = data.user_name;
    this.email_address = data.email_address;
  };

  User.create = (newTutorial,result) => {
    sql.query("INSERT INTO test_tables SET ?", newTutorial, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, newTutorial);
      //console.log("created : ", { id: res.insertId, ...newTutorial });
      //result(null, { id: res.insertId, ...newTutorial });
    });
  };

  
  User.findById = (id, result) => {
    
    sql.query("SELECT * FROM test_tables WHERE user_name = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found tutorial: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found User with the id
      result({ kind: "not_found" }, null);
    });
  };
  
  User.getAll = (title, result) => {
    let query = "SELECT * FROM test_tables";
  
    if (title) {
      query += ` WHERE title LIKE '%${title}%'`;
    }
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("test_tables: ", res);
      result(null, res);
    });
  };
  
  User.getAllPublished = result => {
    sql.query("SELECT * FROM test_tables WHERE published=true", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("test_tables: ", res);
      result(null, res);
    });
  };
  
  User.updateById = (id, tutorial, result) => {
    sql.query(
        "UPDATE test_tables SET user_name = ?, email_address = ? WHERE user_name = ?",
        [tutorial.user_name, tutorial.email_address, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found User with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated tutorial: ", { id: id, ...tutorial });
        result(null, { id: id, ...tutorial });
      }
    );
  };
  
  User.remove = (id, result) => {
    sql.query("DELETE FROM test_tables WHERE user_name = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted tutorial with id: ", id);
      result(null, res);
    });
  };
  
  User.removeAll = result => {
    sql.query("DELETE FROM test_tables", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} test_tables`);
      result(null, res);
    });
  };

  module.exports = User; */
