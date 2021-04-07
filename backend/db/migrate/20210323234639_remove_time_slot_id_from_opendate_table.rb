class RemoveTimeSlotIdFromOpendateTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :open_dates, :timeslot_id
  end
end
