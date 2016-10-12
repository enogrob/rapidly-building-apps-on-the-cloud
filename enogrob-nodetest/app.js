//var http = require('http');  
//http.createServer(
//    function (req, res) {  
//        res.writeHead(200, {'Content-Type': 'text/plain'});  
//        res.end('Hello World\n');  
//    }
//).listen(3000); 
// in Bluemix
var http = require('http');  
var appport = process.env.VCAP_APP_PORT || 3000;  
http.createServer(
    function (req, res) {      
        res.writeHead(200, {'Content-Type': 'text/plain'});      
        res.end('Hello World\n');  
    }
).listen(appport);  
 
