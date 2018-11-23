var http = require("http");
http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8091);

// Console will print the message
console.log('Server running at http://127.0.0.1:8091/');

exports.rgbToHex = function(red, green, blue) {

   var redHex   = red.toString(16);
   var greenHex = green.toString(16);
   var blueHex  = blue.toString(16);
 
   return pad(redHex) + pad(greenHex) + pad(blueHex);
 
 };
 
 function pad(hex) {
   return (hex.length === 1 ? "0" + hex : hex);
 }

 exports.hexToRgb = function(hex) {

   var red   = parseInt(hex.substring(0, 2), 16);
   var green = parseInt(hex.substring(2, 4), 16);
   var blue  = parseInt(hex.substring(4, 6), 16);
 
   return [red, green, blue];
 
 };
 