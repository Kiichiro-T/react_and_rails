class Comment < ApplicationRecord
  validates :text, presence: true
  validates :date, presence: true
end
