window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('bb init');
    new TrelloClone.Routers.BoardsRouter({$el: $('#main')});

    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
