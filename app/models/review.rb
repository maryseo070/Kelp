class Review < ApplicationRecord
  validates :title, :body, :date, presence: true

  validates :rating, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5}

  belongs_to :user,
    foreign_key: :author_id,
    class_name: "User"

  belongs_to :reef,
    foreign_key: :reef_id,
    class_name: "Reef"
end
