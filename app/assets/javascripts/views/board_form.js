TrelloClone.Views.BoardForm = Backbone.View.extend({
  template: JST['boards/form'],

  tagName: 'form',

  className: 'form-group',

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
    var board = new TrelloClone.Models.Board(this.$el.serializeJSON());
    board.save({}, {
      success: function() {
        this.collection.add(board);
      }.bind(this)
    });
  },
});
