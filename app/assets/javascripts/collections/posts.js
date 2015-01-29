App.Collections.Posts = Backbone.Collection.extend({
  url: "/posts",
  model: App.Models.Post,

  getOrFetch: function(id) {
    var posts = this;
    var post;
    if (post = this.get(id)) {
      post.fetch();
    } else {
      post = new App.Models.Post({ id: id });
      post.fetch({
        success: function () { posts.add(post);}
      });
    }

    return post;
  }


})
