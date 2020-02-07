var express = require("express");
var router = express.Router();
var path = require("path");
var db = require("../utils/handlers/user");
var textParser = require("../utils/text-parser");
var formParser = require("../utils/form-parser");

// router.get("/events", function(req, res, next) {
//   db.getAll((err, users) => {
//     res.render("category", {
//       title: req.app.conf.name,
//       people: users,
//       category: req.params.category
//     });
//   });
// });

router.get("/routing", function(req, res, next) {
  res.render("category/routing", {
    title: req.app.conf.name
  });
});

module.exports = router;
