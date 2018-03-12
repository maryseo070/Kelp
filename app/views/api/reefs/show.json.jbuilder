json.set! "reef" do
  json.partial! 'api/reefs/reef', reef: @reef
end

json.set! "reviews" do
  @reef.reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reefs/review', review: review

      json.set! "author" do
        json.partial! 'api/reefs/user', user: review.user
      end

      review.photos.each do |photo|
        json.set! "photos" do
          json.partial! 'api/reefs/photo', photo: photo
        end
      end
    end
  end
end
