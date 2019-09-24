var app = require('express')();
var http = require('http').createServer(app);
var port = process.env.PORT || 5000

app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
  res.sendFile(__dirname + '/index.html')
});

http.listen(3000, function(){
  console.log('listening on *: ' + port);
});