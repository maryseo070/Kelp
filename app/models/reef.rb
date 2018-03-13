class Reef < ApplicationRecord
  validates :lat, :lng, :name, presence: true, uniqueness: true

  has_many :reviews,
    foreign_key: :reef_id,
    class_name: "Review"

  has_many :photos,
    through: :reviews,
    source: :photos

  has_many :reviewers,
    through: :reviews,
    source: :user

  def self.find_average_ratings
    return Reef.joins(:reviews).
    group("reef_id").
    select("reefs.*").
    average("rating")
  end


end
