TrelloClone.Views.ListForm = Backbone.View.extend({

  template: JST['lists/form'],

  tagName: 'form',
  className: 'form-group col-md-4',

  events: {
    "submit": "createList"
  },

  initialize: function(options) {
    this.board = options.board;
  },

  render: function() {
    if (!this.model) {
      this.model = new TrelloClone.Models.List();
    }
    var content = this.template({list: this.model});
    this.$el.html(content);
    return this;
  },

  createList: function(event) {
    event.preventDefault();
    var list = new TrelloClone.Models.List(this.$el.serializeJSON());

    list.set('ord', this.collection.length + 1);
    list._board = this.board;
    list.set('board_id', this.board.id);

    list.save({}, {
      success: function() {
        this.collection.add(list);
        Backbone.history.navigate("/boards/" + list.get('board_id'), {trigger: true});
      }.bind(this)
    });
    return list;
  },

});
