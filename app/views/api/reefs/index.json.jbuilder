@reefs.each do |reef|
  json.set! reef.id do
    json.partial! 'reef', reef: reef
    json.avg_rating @ratings[reef.id]
  end
end
