json.array! (@reefs) do |users|
  json.(reef, *Reef.column_names)
  json.followed(current_user.follows?(user))
end
