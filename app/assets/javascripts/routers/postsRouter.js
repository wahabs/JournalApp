App.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.$sideEl = options.$sideEl;

    this._posts = new App.Collections.Posts();
    this._posts.fetch();
    var index = new App.Views.PostsIndex({ collection: this._posts });
    this.$sideEl.html(index.render().$el);

  },

  routes: {
    "" : "postForm",
    "/posts" : "postsIndex",
    "posts/new" : "postForm",
    "posts/:id" : "postShow",
    "posts/:id/edit" : "postForm"
  },

  postsIndex: function() {
    this._posts = this._posts || new App.Collections.Posts();
    this._posts.fetch();
    var index = new App.Views.PostsIndex({ collection: this._posts });
    this._swapView(index);
  },

  postShow: function(id) {
    var post = this._posts.getOrFetch(id);

    var showView = new App.Views.PostShow({
      model: post
    });

    this._swapView(showView);
  },

  postForm: function(id) {
    if (id) {
      var post = this._posts.getOrFetch(id);
    } else {
      var post = new App.Models.Post();
    }
    var formView = new App.Views.PostForm({ model: post, collection: this._posts });
    this._swapView(formView);
  },

  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.$rootEl.html(newView.render().$el);
    this.currentView = newView;
  }

})
