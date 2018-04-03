json.set! "reef" do
  json.avg_rating @ratings[@reef.id]
  json.partial! 'api/reefs/reef', reef: @reef
  json.review_count @reef.reviews.length
  json.set! "reviewIds" do
    @reef.reviews.each do |review|
      review_ids = []
      review_ids.push(review.id)
      json.array! review_ids
    end
  end
end

json.set! "reviews" do
  @reef.reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reefs/review', review: review


      review.photos.each do |photo|
        json.set! "photos" do
          json.partial! 'api/reefs/photo', photo: photo
        end
      end
    end
  end
end

json.set! "photos" do
  @reef.reviews.each do |review|
    review.photos.each do |photo|
      json.set! photo.id do
        json.partial! 'api/reefs/photo', photo: photo
      end
    end
  end
end


json.set! "authors" do
  @reef.reviews.each do |review|
    json.set! review.author.id do
      json.partial! 'api/reefs/user', user: review.author
    end
  end
end
