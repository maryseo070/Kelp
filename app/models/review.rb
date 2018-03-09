class Review < ApplicationRecord
  validates :title, :body, :date, presence: true

  validates :rating, inclusion: { in: (1..5) }


  belongs_to :user,
    foreign_key: :author_id,
    class_name: "User"

  belongs_to :reef,
    foreign_key: :reef_id,
    class_name: "Reef"
end
