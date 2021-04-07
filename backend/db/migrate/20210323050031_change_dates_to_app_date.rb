class ChangeDatesToAppDate < ActiveRecord::Migration[6.1]
  def change
    rename_table :dates, :openDate 
  end
end
