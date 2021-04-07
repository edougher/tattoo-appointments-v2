class AddStatustoAppts < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :status, :string
  end
end
