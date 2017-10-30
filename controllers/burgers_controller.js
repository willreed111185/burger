const express = require('express');
const router = express();

const burger = require('../models/burger.js');

router.get('/', function(req, res){
	burger.all(function(data){
		var hbsObj = {
			burgers: data
		};
		res.render("index", hbsObj);
	});
});

router.post('/', function(req, res){
	burger.create(req.body.burger, function(data){
		res.redirect('/');
	});
});

router.put('/api/burgers/:id', function(req, res){
	burger.update(req.params.id, function(result){
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});
module.exports = router;
