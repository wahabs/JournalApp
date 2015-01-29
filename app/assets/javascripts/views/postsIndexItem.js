App.Views.PostsIndexItem = Backbone.View.extend({
  template: JST["posts_index_item"],

  tagName: "li",

  events: {
    "click button.delete" : "deletePost",
    },

  initialize: function(options) {
    // this.listenTo(this.model, "add change:title destroy reset", this.goToIndex);
  },

  render: function() {
    var content = this.template({post: this.model})
    this.$el.html(content);
    return this;
  },

  deletePost: function(event) {
    event.preventDefault();
    this.model.destroy();
  },

  // goToIndex: function() {
  //   debugger;
  //   Backbone.history.navigate("", { trigger: true });
  // }
});
