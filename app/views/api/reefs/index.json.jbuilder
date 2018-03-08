@reefs.each do |reef|
  json.set! reef.id do
    json.partial! 'reef', reef: reef
  end
end
