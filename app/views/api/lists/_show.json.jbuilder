json.extract! list, :id, :board_id, :title, :ord, :created_at, :updated_at

json.cards do
  json.array!(list.cards) do |card|
    json.partial! 'api/cards/show', card: card
  end
end
