var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express(); 

var PORT = process.env.PORT || 8080; 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/*+json'}));
app.use(bodyParser.raw({ type: 'application/vnd.custom0-type'}));
app.use(bodyParser.text({ type: 'text/html' }));

require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});