TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: '/api/boards',

  lists: function() {
    if (!this._lists) {
      this._lists = new TrelloClone.Collections.Lists([], {board: this});
    }
    return this._lists;
  },

  parse: function(payload) {
    if (payload.lists) {
      // extract list data from payload
      this.lists().set(payload.lists, {parse: true});
      delete payload.lists;

      //set board association for each list
      this.lists().forEach(function(list) {
        list._board = this;
      }.bind(this));
    }
    return payload;
  }
});
