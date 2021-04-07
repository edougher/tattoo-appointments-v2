class ChangeTimeSlotsColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :appt_dates, :time_slots, :timeslot_id
  end
end
