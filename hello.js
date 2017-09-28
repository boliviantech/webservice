var debug = require('debug')('http')
  , http = require('http')
  , name = 'My App';
 
// fake app
 
 
http.createServer(function(req, res){
  debug(req.method + ' ' + req.url);
  res.end('OK');
}).listen(80, function(){
  debug('listening');
});
 
