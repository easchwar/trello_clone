TrelloClone.Views.CardForm = Backbone.View.extend({
  template: JST['cards/form'],

  tagName: 'form',

  events: {
    'submit': 'createCard'
  },

  initialize: function(options) {
    if (!options.model) {
      this.model = new TrelloClone.Models.Card();
    }
    this.list = options.list;
  },

  render: function() {
    var content = this.template({card: this.model});
    this.$el.html(content);
    return this;
  },

  createCard: function(event) {
    event.preventDefault();

    var card = new TrelloClone.Models.Card(this.$el.serializeJSON());

    var ords = this.collection.pluck('ord');
    var maxOrd = 0;

    ords.forEach(function(ord) {
      if (ord > maxOrd) { maxOrd = ord; }
    });
    maxOrd++;

    card.set('ord', maxOrd);
    card._list = this.list;
    card.set('list_id', this.list.id);

    card.save({}, {
      success: function(model) {
        this.collection.add(model);
      }.bind(this)
    });
  }
});
