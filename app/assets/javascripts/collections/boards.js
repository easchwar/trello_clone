TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: '/api/boards',

  model: TrelloClone.Models.Board,

  getOrFetch: function(id) {
    var board;

    // if board exists in collection get it, otherwise make a new one
    if (this.get(id)) {
      board = this.get(id);
    } else {
      board = new TrelloClone.Models.Board({id: id});
    }
    // on successful fetch, add it to the collection (ignore if already present)
    board.fetch({
      success: function() {
        debugger
        this.add(board, {merge: false});  
      }.bind(this)
    });
    return board;
  },
});
