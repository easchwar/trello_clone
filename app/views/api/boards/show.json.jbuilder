# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.extract! @board, :id, :title, :created_at, :updated_at

json.lists do
  json.array!(@board.lists) do |list|
    json.extract! list, :id, :board_id, :title, :ord, :created_at, :updated_at
  end
end
