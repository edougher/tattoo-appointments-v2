class AddOpenDateIdColumnToTimeSlot < ActiveRecord::Migration[6.1]
  def change
    add_column :time_slots, :open_date_id, :integer
  end
end
