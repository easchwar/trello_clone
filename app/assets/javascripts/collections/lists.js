TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: function() {
    return this._board.url() + "/lists";
  },

  comparator: 'ord',

  model: TrelloClone.Models.List,
});
