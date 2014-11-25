var express = require('express');
var http = require('http');
var router = express.Router();

// Homepage
router.get('/', function(req, res) {
	var output = client.get("http://life.cfapps.io/api/gumball/",function(response) {
		response.on('data', function (chunck) {
			console.log(chunck);
			res.render('index', { title:chunck });
		});
	
	
	});
	output.end();
});
//{
//host : 'localhost',
//port : 8080,
//path : 'http://life.cfapps.io/api/gumball/',
//method : 'GET' 
//};
//var output = http.request(optionsget, function(response) {
//response.on('data', function (chunck) {
	//console.log(chunck);
	//res.render('index', { title:chunck });
//	});

//Turn the crank
router.get('/turn', function(req, res) {
	var output = client.put("http://life.cfapps.io/api/gumball/turn",function(response) {
		response.on('data', function (chunck) {
			console.log(chunck);
			res.render('index', { title:chunck });
		});
	
	
	});
	output.end();
});
	
	/*var optionsget = {
    	//host : 'localhost',
    	//port : 8080,
    	path : 'http://life.cfapps.io/api/gumball/turn',
    	method : 'PUT' 
	};
	var output = http.request(optionsget, function(response) {
		response.on('data', function (chunck) {
			console.log(chunck);
			res.render('index', { title: chunck });
		});
	});
	output.end();
});*/

//Insert a quarter
router.get('/insrt', function(req, res) {
	
	var output = client.put("http://life.cfapps.io/api/gumball/turn",function(response) {
		response.on('data', function (chunck) {
			console.log(chunck);
			res.render('index', { title:chunck });
		});
	
	
	});
	output.end();
});
	
/*var optionsget = {
    	//host : 'localhost',
    	//port : 8080,
    	path : 'http://life.cfapps.io/api/gumball/insrt',
    	method : 'PUT' 
	};
	var output = http.request(optionsget, function(response) {
		response.on('data', function (chunck) {
			console.log(chunck);
			res.render('index', { title: chunck });
		});
	});
	output.end();
});*/

module.exports = router;
