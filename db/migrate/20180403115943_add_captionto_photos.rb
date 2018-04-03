class AddCaptiontoPhotos < ActiveRecord::Migration[5.1]
  def change
    add_column :photos, :caption, :string
  end
end
