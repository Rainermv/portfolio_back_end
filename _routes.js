"use strict";

module.exports = function(app) {
  var users = require("../controllers/usersController");

  // users routes
  app.routes('/users')
    .get(users.list_all_users)
    .post(users.create_a_user);

  app.routes('/users/:userId')
    .get(users.read_a_user)
    .put(users.update_a_user)
    .delete(users.delete_a_user);

  var posts = require("../controllers/postsController");

  // users routes
  app.route('/posts')
    .get(posts.list_all_posts)
    .post(posts.create_a_post);

app.route('/posts/:userId')
  .get(posts.read_a_post)
  .put(posts.update_a_post)
  .delete(posts.delete_a_post);
}
