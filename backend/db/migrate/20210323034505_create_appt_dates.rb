class CreateApptDates < ActiveRecord::Migration[6.1]
  def change
    create_table :appt_dates do |t|
      t.string :date
      t.integer :time_slots

      t.timestamps
    end
  end
end
