class Reef < ApplicationRecord
  validates :lat, :lng, :name, presence: true, uniqueness: true
  validates :continent, presence: true

  has_many :reviews,
    foreign_key: :reef_id,
    class_name: "Review"

  has_many :photos,
    through: :reviews,
    source: :photos

  has_many :reviewers,
    through: :reviews,
    source: :user

# refactor to accept list of reefs to find averages of
  def self.find_average_ratings
    return Reef.joins(:reviews).
    group("reef_id").
    select("reefs.*").
    average("rating")
  end
  # instance method to find avg rating of one reef

  # return Reef.joins(:reviews).
  # group("reef_id").
  # select("reefs.*").
  # average("rating").
  # having("AVG('rating') > ?", 2)



  def find_photo(reef)
    reef.reviews.each do |review|
      if review.photos
        return photos[0]
      else
        return nil
      end
    end
  end

end
