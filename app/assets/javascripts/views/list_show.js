TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['lists/show'],

  tagName: 'div',
  className: 'col-md-4',

  events: {
    'click .delete': 'delete'
  },

  render: function() {
    var content = this.template({list: this.model});
    this.$el.html(content);
    return this;
  },

  delete: function() {
    this.model.destroy();
  },
});
