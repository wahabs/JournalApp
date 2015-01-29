App.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts_index"],

  tagName: "ul",

  events: {
    "dblclick li" : "showPost"
  },

  initialize: function(options) {
    this.listenTo(this.collection, "sync remove", this.render);
  },

  render: function() {
    var that = this;

    var content = that.template({posts: that.collection});
    that.$el.html(content);

    that.collection.each( function(post) {
      var indexItem = new App.Views.PostsIndexItem({model: post});
      that.$el.append(indexItem.render().$el.prop("id", post.id));
    })

    return that;
  },

  showPost: function(event) {
    var id = $(event.currentTarget).attr("id");
    Backbone.history.navigate("posts/"+id, { trigger: true });

  }


})
