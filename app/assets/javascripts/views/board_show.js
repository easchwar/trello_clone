TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],

  initialize: function() {
    this.listenTo(this.model, 'sync add remove', this.render);
    this.listenTo(this.model.lists(), 'sync add remove', this.render);
    this._listSubViews = [];
    this._form = new TrelloClone.Views.ListForm({
      board: this.model,
      collection: this.model.lists()
    });
  },

  removeSubviews: function() {
    this._listSubViews.forEach(function(subview) {
      subview.remove();
    });
    this._listSubViews = [];

    this._form.remove();
    this._form = null;
  },

  remove: function() {
    this.removeSubviews();
    Backbone.View.prototype.remove.call(this);
  },

  render: function() {
    var content = this.template({board: this.model});
    this.$el.html(content);
    this.removeSubviews();

    // populate lists
    this.model.lists().each(function(list) {
      var view = new TrelloClone.Views.ListShow({model: list});
      this.$('.row').append(view.render().$el);
      this._listSubViews.push(view);
    }, this);

    // append list form
    this._form = new TrelloClone.Views.ListForm({
      board: this.model,
      collection: this.model.lists()
    });
    this.$('.row').append(this._form.render().$el);

    return this;
  }
});
