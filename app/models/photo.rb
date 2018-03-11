class Photo < ApplicationRecord
  validates :review_id, presence: true
  belongs_to :review,
    foreign_key: :review_id,
    class_name: "Review"

  has_attached_file :image, default_url: "fish2.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
