TrelloClone.Routers.BoardsRouter = Backbone.Router.extend({

  routes: {
    "": "boardsIndex",
  },

  initialize: function(options) {
    this.$el = options.$main;

    this._boards = new TrelloClone.Collections.Boards();
    this._boards.fetch();
  },

  boardsIndex: function() {
    var view = new TrelloClone.Views.BoardsIndex({collection: this._boards});

  },

  _swapView: function(view) {
    // this._currentView && this._currentView.remove();

  }
});
