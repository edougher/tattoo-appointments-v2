class CreateTimeSlots < ActiveRecord::Migration[6.1]
  def change
    create_table :time_slots do |t|
      t.string :start
      t.string :end
      t.text :note

      t.timestamps
    end
  end
end
