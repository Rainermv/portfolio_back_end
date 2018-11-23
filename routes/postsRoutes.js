"use strict";

module.exports = function(app) {
  var posts = require("../controllers/postsController");

  // users routes
  app.route('/posts')
    .get(posts.list_all_posts)
    .post(posts.create_a_post);

app.route('/posts/:postId')
  .get(posts.read_a_post)
  .put(posts.update_a_post)
  .delete(posts.delete_a_post);
}
