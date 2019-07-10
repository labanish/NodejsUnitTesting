var express = require("express"); 
var parser = require("body-parser"); 
var app = express(); 
var http = require('http').Server(app); 
app.use(parser.json()); 
var Converter = require("./converter").Converter; 
var converter = new Converter(); 
app.post("/convert",function(req,res){     
	var temp = req.body.temp;     
	var units = req.body.units;     
	var result = {};     
	if(units.toLowerCase() == "f"){         
		result.fahrenheit = temp;         
		result.celsius = converter.fahrenheitToCelsius(temp);         
		result.kelvin = converter.fahrenheitToKelvin(temp);     
	}     
	else if(units.toLowerCase() == "c"){         
		result.celsius = temp;         
		result.fahrenheit = converter.celsiusToFahrenheit(temp);         
		result.kelvin = converter.celsiusToKelvin(temp);     
	}     
	res.send(result);     
	res.end(); 
}); 
http.listen(3000, function(){     console.log('listening on *:3000'); });