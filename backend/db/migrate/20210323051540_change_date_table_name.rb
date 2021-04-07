class ChangeDateTableName < ActiveRecord::Migration[6.1]
  def change
    rename_table :openDates, :open_dates
  end
end
