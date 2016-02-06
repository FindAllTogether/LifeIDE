var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/views/dashboard/main.html', function(req, res, next) {
  res.render('views/dashboard/main', { title: 'Express' });
});

router.get('/views/dashboard/home.html', function(req, res, next) {
  res.render('views/dashboard/home', { title: 'Express' });
});

module.exports = router;
