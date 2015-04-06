TrelloClone.Routers.BoardsRouter = Backbone.Router.extend({

  routes: {
    "": "boardsIndex",
    "boards/:id": "boardShow"
  },

  initialize: function(options) {
    this.$el = options.$el;

    this._boards = new TrelloClone.Collections.Boards();
    this._boards.fetch();
  },

  boardsIndex: function() {
    this._boards.fetch();
    var view = new TrelloClone.Views.BoardsIndex({collection: this._boards});
    this._swapView(view);
  },

  boardShow: function(id) {
    var board = this._boards.getOrFetch(id);
    var view = new TrelloClone.Views.BoardShow({model: board});
    this._swapView(view);
  },

  _swapView: function(view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;
    this.$el.html(view.render().$el);
  }
});
