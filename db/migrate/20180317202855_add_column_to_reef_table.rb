class AddColumnToReefTable < ActiveRecord::Migration[5.1]
  def change
    add_column :reefs, :continent, :string
  end
end
