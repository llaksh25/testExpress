const db = require("../models/db");
const countryModel = db.Countrys;
const roleModel = db.Roles;
const Op = db.Sequelize.Op;

exports.getCountry = (req, res) => {
    //const id = req.query.sequelize_id;
    //var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  
    countryModel.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Countrys."
        });
      });
};

exports.getRole = (req, res) => {

    roleModel.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Roles."
      });
    });

};