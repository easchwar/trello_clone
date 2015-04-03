TrelloClone.Views.BoardForm = Backbone.View.extend({
  template: JST['boards/form'],

  tagName: 'form',

  events: {
    "submit": "createBoard"
  },

  render: function() {
    if (!this.model) {
      this.model = new TrelloClone.Models.Board();
    }
    var content = this.template({board: this.model});
    this.$el.html(content);
    return this;
  },

  createBoard: function(event) {
    event.preventDefault();
    console.log('submitting');
  },
});
