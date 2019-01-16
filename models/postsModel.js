'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostsSchema = new Schema({

  title: String,
  body: String,
  key: String,
  gallery: Number,

});

module.exports = mongoose.model("Posts", PostsSchema);
