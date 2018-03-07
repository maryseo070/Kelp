class Reef < ApplicationRecord
  validates :location, :name, presence: true

  has_many :reviews
  has_many :photos, as: :imageable
end
