TrelloClone.Views.CardIndexItem = Backbone.View.extend({
  template: JST['cards/index_item'],

  tagName: 'div',
  className: 'list-group-item hoverable',

  events: {
    'click .card-delete': 'delete'
  },

  render: function() {
    var content = this.template({card: this.model});
    this.$el.html(content);
    this.$el.data('id', this.model.id);
    this.$el.data('ord', this.model.get('ord'));
    return this;
  },

  delete:function() {
    this.model.destroy();
  },

});
