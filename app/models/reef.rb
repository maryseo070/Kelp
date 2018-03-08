class Reef < ApplicationRecord
  validates :lat, :lng, :name, presence: true

  has_many :reviews
  has_many :photos, as: :imageable
end
