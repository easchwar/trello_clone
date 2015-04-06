TrelloClone.Collections.Cards = Backbone.Collection.extend({
  url: '/api/cards',

  comparator: 'ord',

  model: TrelloClone.Models.Card,
});
