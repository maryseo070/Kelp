class AddColumnToReviewTable < ActiveRecord::Migration[5.1]
  def change
    add_column :reviews, :date, :date
  end
end
