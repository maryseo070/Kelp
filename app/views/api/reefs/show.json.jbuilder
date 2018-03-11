json.set! "reef" do
  json.partial! 'reef', reef: @reef
end

json.set! "reviews" do
  @reef.reviews.each do |review|
    json.set! review.id do
      json.partial! 'review', review: review

      json.set! "author" do
        json.partial! 'user', user: review.user
      end
    end
  end
end
