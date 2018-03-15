json.array! (@reefs) do |reef|
  json.(reef, *Reef.column_names)
end
