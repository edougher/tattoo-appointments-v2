class ChangeApptsDataTypes < ActiveRecord::Migration[6.1]
  def change
    change_table :appointments do |t|
      t.change :width, :integer
      t.change :height, :integer
    end
  end
end
