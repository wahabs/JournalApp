App.Views.PostShow = Backbone.View.extend({
  template: JST["post_show"],

  events: {
  // "click button.back" : "backPage"
    "dblclick div" : "openEdit",
    "blur input" : "closeEdit",
    "blur textarea" : "closeEdit"
  },

  initialize: function(options) {
    this.listenTo(this.model, "add change remove reset", this.render);
  },

  render: function() {
    var content = this.template({post: this.model, editing: ""})
    this.$el.html(content);
    return this;
  },

  deletePost: function(event) {
    this.model.destroy();
  },

  openEdit: function(event) {
    var property = $(event.currentTarget).attr("class");
    var content = this.template({post: this.model, editing: property});
    this.$el.html(content);
  },

  closeEdit: function(event) {
    var that = this;
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    that.model.set(formData);
    that.model.save();
    // that.model.save({}, {
    //   success: function() {
    //     Backbone.history.navigate("", { trigger: true }) }
    // })
  }
  // backPage: function(event) {
  //   Backbone.history.navigate("", { trigger: true });
  // }


})
