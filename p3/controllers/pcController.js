var User = require('../models/pc');
var debug = require('debug')('blog:pc_controller');
var mongoose = require('mongoose');
var pc  = mongoose.model('pc');

exports.findAllpc = function(req, res) {
	pc.find(function(err, pc) {
    if(err) res.send(500, err.message);

    console.log('GET /pc')
		res.status(200).jsonp(pc);
	});
};

exports.addpc = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var pc = new pc({
		marca:    req.body.marca,
		memoria: 	  req.body.memoria,
		precio:  req.body.precio,
		tipo:   req.body.poster,
		sistema_operativo:  req.body.sistema_operativo,
		
	});

	pc.save(function(err, pc) {
		if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(pc);
	});
};

exports.updatepc = function(req, res) {
	pc.findById(req.params.id, function(err, pc) {
		pc.marca   = req.body.marca;
		pc.memoria   = req.body.memoria;
		pc.precio = req.body.precio;
		pc.tipo  = req.body.tipo;
		pc.sistema_operativo = req.body.sistema_operativo;
	

		pc.save(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(pc);
		});
	});
};

exports.deletepc= function(req, res) {
	pc.findById(req.params.id, function(err, pc) {
		pc.remove(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).send();
		})
	});
};