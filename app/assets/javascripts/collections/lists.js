TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: function() {
    return this._board.url() + "/lists";
  },
  
  model: TrelloClone.Models.List,
});
