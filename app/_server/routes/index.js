var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', require('../../../locales/pt-br.json'));
});

router.get('/en', function(req, res, next) {
  res.render('pages/index', require('../../../locales/en-us.json'));
});

module.exports = router;
