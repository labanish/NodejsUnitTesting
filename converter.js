var Converter = function(){     var self = this; } 
Converter.prototype.celsiusToFahrenheit = function(temp){     return temp*9/5+32; }; 
Converter.prototype.fahrenheitToCelsius = function(temp){     return (temp-32)/1.8; }; 
Converter.prototype.celsiusToKelvin = function(temp){     return (temp+273.15); } 
Converter.prototype.fahrenheitToKelvin = function(temp){     var cel = this.fahrenheitToCelsius(temp);     return this.celsiusToKelvin(cel); } 

if (typeof exports == 'object' && exports)     exports.Converter = Converter;