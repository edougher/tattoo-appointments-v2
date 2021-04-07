class Appointment < ApplicationRecord
    belongs_to :user
    has_many :firebase_image_urls
end
