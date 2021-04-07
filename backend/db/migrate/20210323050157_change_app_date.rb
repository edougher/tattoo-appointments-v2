class ChangeAppDate < ActiveRecord::Migration[6.1]
  def change
    rename_table :openDate , :openDates  
  end
end
