class AddTimeCostCommentsToAppts < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :time, :integer
    add_column :appointments, :cost, :integer
    add_column :appointments, :artistComments, :text
  end
end
