var express = require("express"),
  app = express(),
  port = process.env.PORT || 8000,
  mongoose = require("mongoose"),
  User = require("./models/usersModel"),
  Post = require("./models/postsModel"), // Created model loading here
  bodyParser = require("body-parser");


// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://admin:DnsrNRWWg5ESuR2@ds145563.mlab.com:45563/portfoliodb", { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// app.use(function(req, res){
//
//   res.status(404).send({url: req.originalUrl + " not found"});
//
// });

var routesList = ["users", "posts"];

for (i in routesList){
  var routes = require ('./routes/' + routesList[i] + 'Routes');
  routes(app);
}
//
//
// var routes = require('./routes/usersRoutes'); //importing route
// routes(app); //register the route
//
// var routes2 = require('./routes/postsRoutes'); //importing route
// routes2(app); //register the route

app.listen(port);

console.log('todo list RESTful API started on: ' + port);
