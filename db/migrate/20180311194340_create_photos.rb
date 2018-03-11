class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.integer :review_id, null: false
      t.timestamps
    end
  end
end
