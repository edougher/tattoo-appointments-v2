class AddColorsToAppts < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :colors, :integer
  end
end
