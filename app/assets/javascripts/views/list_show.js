TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],

  tagName: 'div',
  className: 'col-md-4 list-show',

  events: {
    'click .delete': 'delete'
  },
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.cards(), 'add remove', this.render);
  },

  _removeFormView: function() {
    if (this._cardForm) {
      this._cardForm.remove();
    }
    this._cardForm = null;
  },

  render: function() {
    var content = this.template({list: this.model});
    this.$el.html(content);
    this._removeFormView();

    var formView = new TrelloClone.Views.CardForm({
      model: new TrelloClone.Models.Card(),
      collection: this.model.cards(),
      list: this.model,
    });
    this._cardForm = formView;
    this.$('li.form').html(formView.render().$el);
    return this;
  },

  delete: function() {
    this.model.destroy();
  },
});
