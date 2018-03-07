class ChangeUserTableEmail < ActiveRecord::Migration[5.1]
  def change
    change_table(:users) do |t|
      t.remove :username
      t.column :email, :string
    end
  end
end
