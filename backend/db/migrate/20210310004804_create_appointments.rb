class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.integer :user_id
      t.decimal :width
      t.decimal :height
      t.string :location
      t.text :note

      t.timestamps
    end
  end
end
