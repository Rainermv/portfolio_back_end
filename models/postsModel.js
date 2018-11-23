'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostsSchema = new Schema({

  title: String,
  body: String,
  key: String,
  gallery: Boolean,

});

module.exports = mongoose.model("Posts", PostsSchema);
