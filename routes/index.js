var express = require('express');
var router = express.Router();

function ajax_response_check(req, res, next){
	if(!req.xhr){
		res.render('base');
	}else{
		next();
	}
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('base');
});

router.get('/home',
	function(req, res, next) {
	  res.render('main');
	});

router.get('/dashboard',
	ajax_response_check, 
	function(req, res, next) {
	  res.render('dashboard');
	});

router.get('/appearance/widgets', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('appearance/widgets');
	});

router.get('/appearance/menus', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('appearance/menus');
	});

router.get('/appearance/themes', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('appearance/themes');
	});

router.get('/appearance/plugins', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('appearance/plugins');
	});

router.get('/appearance/layouts', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('appearance/layouts');
	});

router.get('/database', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('database/index');
	});

router.get('/database/add', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('database/form');
	});

router.get('/database/edit/:table_id/:row_id', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('database/form');
	});

router.get('/database/list/:table_id', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('database/list');
	});

router.get('/forms/add', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('forms/form');
	});

router.get('/forms/edit/:id', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('forms/form');
	});

router.get('/forms/list', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('forms/list');
	});

router.get('/api/add', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('api/form');
	});

router.get('/api/edit/:id', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('api/form');
	});

router.get('/api/list', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('api/list');
	});

router.get('/users/add', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('users/form');
	});

router.get('/users/edit/:id', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('users/form');
	});

router.get('/users/list', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('users/list');
	});

router.get('/logic/add', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('logic/form');
	});

router.get('/logic/edit/:id', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('logic/form');
	});

router.get('/logic/list', 
	ajax_response_check, 
	function(req, res, next) {
	  res.render('logic/list');
	});


// Directive templates =============================================
router.get('/directive/sidebar', 
	function(req, res, next) {
	  res.render('directive_templates/sidebar');
	});

module.exports = router;