TrelloClone.Collections.Cards = Backbone.Collection.extend({
  url: function() {
    return this._list.url() + '/cards';
  },
  
  model: TrelloClone.Models.Card,
});
