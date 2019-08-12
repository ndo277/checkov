class Task < ApplicationRecord
  validates :user_id, presence: :true
  validates :body, presence: :true

  belongs_to :user 

  has_many :steps,
    dependent: :destroy

end