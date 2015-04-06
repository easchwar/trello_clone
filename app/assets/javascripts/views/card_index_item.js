TrelloClone.Views.CardIndexItem = Backbone.View.extend({
  template: JST['cards/index_item'],

  tagName: 'div',
  className: 'list-group-item hoverable',

  render: function() {
    var content = this.template({card: this.model});
    this.$el.html(content);
    return this;
  },

});
