'use strict';

var mongoose = require("mongoose"),
  Post = mongoose.model("Posts");

// GET POSTS
exports.list_all_posts = function(req, res){

  Post.find({}, function (err, posts){

    if (err){
      res.send(err);
    }

    res.json(posts)

  });
};

// CREATE A POST
exports.create_a_post = function(req, res) {

  var new_post = new Post(req.body);

  new_post.save(function(err, post) {

    if (err)
      res.send(err);

    res.json(post);
  });
};

// READ A POST
exports.read_a_post = function (req, res){

  console.log(req.params.postId);

  Post.findById(req.params.postId, function(err, post){

    if (err){
      res.send(err);
    }

    res.json(post);

  });
};


// UPDATE A post
exports.update_a_post = function (req, res){

  Post.findOneAndUpdate({_id: req.params.postId}, req.body, {new: true}, function(err, post){

    if (err){
      res.send(err);
    }

    res.json(post);

  });
};

// DELETE A post
exports.delete_a_post = function (req, res){

  Post.remove({ _id: req.params.postId}, function (err, post){

    if (err){
      res.send(err);
    }

    res.json({message: "post deleted"});

  });
}
