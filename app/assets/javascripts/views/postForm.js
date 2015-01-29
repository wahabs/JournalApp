App.Views.PostForm = Backbone.View.extend({
  template: JST["post_form"],

  events: {
    "submit form" : "updatePost"
  },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  updatePost: function(event) {
    var that = this;
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    that.model.set(formData);

    that.model.save({}, {
      success: function() {
        that.collection.add(that.model, { merge: true});
        Backbone.history.navigate("", { trigger: true }) }
    })
  }

})
