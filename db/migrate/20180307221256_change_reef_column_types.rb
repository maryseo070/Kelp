class ChangeReefColumnTypes < ActiveRecord::Migration[5.1]
  def change
    change_column :reefs, :lng, :float
    change_column :reefs, :lat, :float
  end
end
