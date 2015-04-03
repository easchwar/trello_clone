TrelloClone.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],

  initialize: function() {
    this.listenTo(this.model, 'sync add remove', this.render);
    this._subviews = [];
  },

  render: function() {
    var content = this.template({board: this.model});
    this.$el.html(content);
    return this;
  }
});
