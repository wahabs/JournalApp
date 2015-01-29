window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new App.Routers.PostsRouter({
      $rootEl: $("#content"),
      $sideEl: $("#sidebar")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  App.initialize();
});
