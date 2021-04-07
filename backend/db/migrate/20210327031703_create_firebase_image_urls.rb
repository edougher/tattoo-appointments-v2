class CreateFirebaseImageUrls < ActiveRecord::Migration[6.1]
  def change
    create_table :firebase_image_urls do |t|
      t.text :image_url
      t.references :appointment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
