var orm = require("./config/orm.js");
var express = require("express"); 
var bodyParser = require("body-parser"); 
var PORT = process.env.PORT || 3000;
var app = express(); 

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json()); 

var exphbs = require("express-handlebars"); 

app.engine("handlebars", exphbs({defaultLayout: "index"})); 
app.set("view engine", "handlebars"); 

var routes = require("./controllers/sandwichController.js"); 

app.use(routes); 


app.listen(PORT, function() {
    console.log("http://localhost:" + PORT);
  });
  
