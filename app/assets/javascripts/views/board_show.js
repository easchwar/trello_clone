TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],

  initialize: function() {
    this.listenTo(this.model, 'sync add remove', this.render);
    this._subviews = [];
  },

  removeSubviews: function() {
    this._subviews.forEach(function(subview) {
      subview.remove();
    });
    this._subviews = [];
  },

  remove: function() {
    this.removeSubviews();
    Backbone.View.prototype.remove.call(this);
  },

  render: function() {
    var content = this.template({board: this.model});
    this.$el.html(content);
    this.removeSubviews();
    
    this.model.lists().each(function(list) {
      var view = new TrelloClone.Views.ListShow({model: list});
      this.$('.row').append(view.render().$el);
      this._subviews.push(view);
    }, this);

    return this;
  }
});
