var express = require('express');
var router = express.Router();
const sequelizeControls = require("../controllers/sequelize.controller");
var multer  =   require('multer');

  //storage details
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
      //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      //cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  });
  var upload = multer({ storage: storage }); 

  
  /* router.post("/file_upload", function(req, res, next){ 
    //res.locals.admin = true
    res.file_Details = upload;
    next()
 }, sequelizeControls.fileUpload); */
  //File Upload
  router.post("/file_upload", upload.single('image'), (req,res) => {
    console.log(req.file)
  });

  // Create
  router.post("/create", sequelizeControls.create);

  // Retrieve all 
  router.get("/get", sequelizeControls.findAll);

  // Retrieve all published 
  //router.get("/published", sequelizeControls.findAllPublished);

  // Retrieve a single with id
  router.get("/getOne/:id", sequelizeControls.findOne);

  // Update with id
  router.put("/update/:id", sequelizeControls.update);

  // Delete  with id
  router.delete("/deleteOne/:id", sequelizeControls.delete);

  // Delete all
  router.delete("/deleteAll", sequelizeControls.deleteAll);


module.exports = router;
