class Photo < ApplicationRecord
  validates :review, presence: true
  
  belongs_to :review,
    foreign_key: :review_id,
    class_name: "Review",
    inverse_of: :photos

  has_attached_file :image, default_url: ""
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
