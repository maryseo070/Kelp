@reefs.each do |reef|
  json.set! reef.id do
    json.partial! 'reef', reef: reef
    json.avg_rating @ratings[reef.id]
    json.set! :photo do
      json.partial! 'photo', photo: reef.reviews.first.photos.first
    end
    json.review_preview reef.reviews.first.body[0..120]
    json.review_count reef.reviews.length
  end
end

# json.demo_photo @demo_photo

# json.photo @pic

# json.photo reef.reviews.first.photos.first
