TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],

  events: {
    "click .button-create": "boardForm"
  },

  initialize: function() {
    this.listenTo(this.collection, 'sync add remove', this.render);
    this._form = new TrelloClone.Views.BoardForm({collection: this.collection});
  },

  remove: function() {
    this._form.remove();
    Backbone.View.prototype.remove.call(this);
  },

  render: function() {
    var content = this.template({boards: this.collection});
    this.$el.html(content);
    return this;
  },

  boardForm: function() {
    console.log('button press');
    this.$('.button-create').replaceWith(this._form.render().$el);
    this.$('.form-horizontal input').focus();
  },
});
