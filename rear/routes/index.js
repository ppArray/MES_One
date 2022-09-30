var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('request /');
  res.json({ status: 200 })
});

module.exports = router;
