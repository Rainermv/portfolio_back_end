'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  name: {
    type: String,
    required: "Please enter the user name"
  },
  // password: {
  //   type: String,
  //   required: "Please enter the user password"
  // },
  // role: {
  //   type: [{
  //     type: String,
  //     enum: ["admin", "user"]
  //   }],
  //   default: ["user"]
  // }

});

module.exports = mongoose.model("Users", UsersSchema);
