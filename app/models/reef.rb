class Reef < ApplicationRecord
  validates :lat, :lng, :name, presence: true, uniqueness: true

  has_many :reviews,
    foreign_key: :reef_id,
    class_name: "Review"

  has_many :photos,
    through: :reviews,
    source: :photos
end
