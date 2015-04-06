TrelloClone.Models.List = Backbone.Model.extend({

  urlRoot: '/api/lists',

  cards: function() {
    if (!this._cards) {
      this._cards = new TrelloClone.Collections.Cards([], {list: this});
    }
    return this._cards;
  },

  parse: function(payload) {
    // set payload card data to list's cards association
    if (payload.cards) {
      this.cards().set(payload.cards, {parse: true});
      delete payload.cards;
    }

    // set each card's list association to this
    this.cards().forEach(function(card) {
      card._list = this;
    }.bind(this));

    return payload;
  },

});
