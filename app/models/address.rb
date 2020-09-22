class Address < ApplicationRecord
  validates :postcode, presence: true, length: { is: 7 }
  validates :postcode, numericality: { only_integer: true }, allow_blank: true
  validates :prefecture_code, presence: true
  validates :prefecture_code, numericality: { only_integer: true }, allow_blank: true
  validates :address_city, presence: true, length: { maximum: 100 }
  validates :address_building, length: { maximum: 100 }
end
