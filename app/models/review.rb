class Review < ApplicationRecord
  validates :body, :date, presence: true

  validates :rating, inclusion: { in: (1..5) }


  belongs_to :user,
    foreign_key: :author_id,
    class_name: "User"

  belongs_to :reef,
    foreign_key: :reef_id,
    class_name: "Reef"

  has_many :photos,
    foreign_key: :review_id,
    class_name: "Photo",
    inverse_of: :review

    accepts_nested_attributes_for :photos
end
