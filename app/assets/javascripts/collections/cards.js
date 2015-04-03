TrelloClone.Collections.Cards = Backbone.Collection.extend({
  url: function() {
    return this._list.url() + '/cards';
  },

  comparator: 'ord',

  model: TrelloClone.Models.Card,
});
