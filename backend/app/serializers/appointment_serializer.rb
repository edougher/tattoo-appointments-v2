class AppointmentSerializer < ActiveModel::Serializer
  #include Rails.application.routes.url_helpers
  attributes :id, :user_id, :created_at, :height, :width, :location, :note, :colors, :status
  has_many :firebase_image_urls
  
end
