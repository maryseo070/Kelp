@reviews.each do |review|
  json.set! review.id do
    json.partial! 'review', review: review
    review.photos.each do |photo|
      json.image_url asset_path(photo.image.url)
      json.photos photo 
    end
  end
end
