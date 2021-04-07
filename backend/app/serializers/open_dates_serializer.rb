class OpenDatesSerializer < ActiveModel::Serializer
  attributes :id, :date
  has_many :time_slots
end
