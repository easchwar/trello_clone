TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],

  tagName: 'div',
  className: 'col-md-4 list-show',

  events: {
    'click .delete': 'delete'
  },
  initialize: function() {
    this._subviews = [];
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.cards(), 'add remove', this.render);
  },

  addFormView: function() {
    var formView = new TrelloClone.Views.CardForm({
      model: new TrelloClone.Models.Card(),
      collection: this.model.cards(),
      list: this.model,
    });
    this._cardForm = formView;
    this.$('div.form').html(formView.render().$el);
  },

  addIndexItems: function () {
    var $div = this.$('div.index-items');
    this.model.cards().each(function(card) {
      var view = new TrelloClone.Views.CardIndexItem({model: card});
      $div.append(view.render().$el);
    });
  },

  removeSubViews: function() {
    if (this._cardForm) {
      this._cardForm.remove();
    }
    this._subviews.forEach(function(subview) {
      subview.remove();
    });

    this._subviews = [];
    this._cardForm = null;
  },

  render: function() {
    var content = this.template({list: this.model});
    this.$el.html(content);

    // clean up old subviews
    this.removeSubViews();

    // add subviews
    this.addFormView();
    this.addIndexItems();

    return this;
  },

  delete: function() {
    this.model.destroy();
  },
});
