'use strict';

var mongoose = require("mongoose"),
  User = mongoose.model("Users");


// GET ALL USERS
exports.list_all_users = function (req, res) {

  User.find({}, function(err, users){

    if (err)
      res.send(err);

    res.json(users);
  });
};

// CREATE A USER
exports.create_a_user = function(req, res) {

  var new_user = new User(req.body);

  new_user.save(function(err, user) {

    if (err)
      res.send(err);

    res.json(user);
  });
};

// READ A USER
exports.read_a_user = function (req, res){

  User.findById(req.params.userId, function(err, user){

    if (err){
      res.send(err);
    }

    res.json(user);

  });
};


// UPDATE A USER
exports.update_a_user = function (req, res){

  User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, user){

    if (err){
      res.send(err);
    }

    res.json(user);

  });
};

// DELETE A USER
exports.delete_a_user = function (req, res){

  User.remove({ _id: req.params.userId}, function (err, user){

    if (err){
      res.send(err);
    }

    res.json({message: "User deleted"});

  });
}
