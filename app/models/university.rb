class University < ApplicationRecord
  has_many :educations
  has_many :university_specialties
  has_many :specialties, through: :university_specialties
end
